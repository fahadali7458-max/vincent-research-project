import asyncio
from playwright.async_api import async_playwright
import json

async def search_pexels():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        )
        
        queries = [
            'market-research',
            'data-analysis',
            'focus-group',
            'consumer-insights',
            'business-strategy-meeting'
        ]
        
        results = []
        for q in queries:
            url = f'https://www.pexels.com/search/videos/{q}/'
            print(f'Visiting {url}...')
            try:
                await page.goto(url, wait_until='domcontentloaded', timeout=15000)
                await page.wait_for_timeout(3000)
                
                # Get video links
                links = await page.eval_on_selector_all('a[href*="/video/"]', '''
                    elements => elements.map(el => {
                        const href = el.getAttribute('href');
                        const img = el.querySelector('img');
                        return {
                            href: href,
                            title: img ? img.getAttribute('alt') : el.innerText,
                            imgSrc: img ? img.getAttribute('src') : null
                        };
                    })
                ''')
                
                print(f'Found {len(links)} links for {q}')
                for item in links[:8]:
                    if item.get('href') and ('/video/' in item['href']):
                        results.append(item)
            except Exception as e:
                print(f'Error for {q}: {e}')
                
        await browser.close()
        
        # Deduplicate
        seen = set()
        unique_results = []
        for r in results:
            if r['href'] not in seen:
                seen.add(r['href'])
                unique_results.append(r)
                
        print(f'\nTotal unique videos found: {len(unique_results)}')
        with open('scratch/pexels_search_results.json', 'w') as f:
            json.dump(unique_results, f, indent=2)
            
        for r in unique_results[:15]:
            print(f"- {r.get('title')}: https://www.pexels.com{r.get('href')}")

asyncio.run(search_pexels())
