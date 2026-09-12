import asyncio
from playwright.async_api import async_playwright
import json
import urllib.request
import os

async def main():
    os.makedirs('scratch/candidate_hq', exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64)')
        
        searches = ['data-dashboard', 'business-presentation', 'financial-charts', 'office-analytics']
        candidates = []
        
        for q in searches:
            url = f'https://www.pexels.com/search/videos/{q}/'
            try:
                await page.goto(url, wait_until='domcontentloaded', timeout=15000)
                await page.wait_for_timeout(2500)
                items = await page.eval_on_selector_all('article', '''
                    articles => articles.map(a => {
                        const link = a.querySelector('a[href*="/video/"]');
                        const img = a.querySelector('img');
                        return {
                            href: link ? link.getAttribute('href') : null,
                            imgSrc: img ? img.getAttribute('src') : null,
                            title: img ? img.getAttribute('alt') : null
                        };
                    })
                ''')
                print(f'{q}: found {len(items)}')
                for it in items[:6]:
                    if it.get('href'):
                        candidates.append(it)
            except Exception as e:
                print(f'Error for {q}: {e}')
                
        await browser.close()
        
        headers = {'User-Agent': 'Mozilla/5.0'}
        saved = []
        for it in candidates:
            slug = it['href'].strip('/').split('/')[-1]
            thumb_path = f'scratch/candidate_hq/{slug}.jpg'
            if it.get('imgSrc'):
                try:
                    req = urllib.request.Request(it['imgSrc'], headers=headers)
                    with urllib.request.urlopen(req, timeout=5) as resp:
                        with open(thumb_path, 'wb') as f:
                            f.write(resp.read())
                        saved.append((slug, thumb_path, it['href']))
                        print(f'Saved {thumb_path}')
                except Exception as e:
                    pass
                    
        with open('scratch/hq_candidates.json', 'w') as f:
            json.dump(saved, f, indent=2)

asyncio.run(main())
