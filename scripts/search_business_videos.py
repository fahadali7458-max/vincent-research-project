import asyncio
from playwright.async_api import async_playwright
import json
import urllib.request
import os

async def search_more():
    os.makedirs('scratch/candidate_business', exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64)')
        
        queries = ['business-meeting', 'corporate-presentation', 'data-analyst']
        results = []
        
        for q in queries:
            url = f'https://www.pexels.com/search/videos/{q}/'
            await page.goto(url, wait_until='domcontentloaded', timeout=15000)
            await page.wait_for_timeout(3000)
            
            items = await page.eval_on_selector_all('article', '''
                articles => articles.map(a => {
                    const link = a.querySelector('a[href*="/video/"]');
                    const img = a.querySelector('img');
                    const video = a.querySelector('video');
                    return {
                        href: link ? link.getAttribute('href') : null,
                        title: img ? img.getAttribute('alt') : null,
                        imgSrc: img ? img.getAttribute('src') : null,
                        videoSrc: video ? video.getAttribute('src') : null
                    };
                })
            ''')
            print(f'{q}: found {len(items)}')
            results.extend(items[:5])
            
        await browser.close()
        
        headers = {'User-Agent': 'Mozilla/5.0'}
        for i, item in enumerate(results):
            img_url = item.get('imgSrc')
            slug = item.get('href', '').strip('/').split('/')[-1]
            if img_url and slug:
                try:
                    req = urllib.request.Request(img_url, headers=headers)
                    with urllib.request.urlopen(req, timeout=5) as resp:
                        p_out = f'scratch/candidate_business/{slug}.jpg'
                        with open(p_out, 'wb') as f:
                            f.write(resp.read())
                        print(f'Saved {p_out}')
                except Exception as e:
                    pass
                    
        with open('scratch/candidate_business.json', 'w') as f:
            json.dump(results, f, indent=2)

asyncio.run(search_more())
