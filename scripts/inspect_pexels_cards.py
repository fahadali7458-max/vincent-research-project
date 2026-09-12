import asyncio
from playwright.async_api import async_playwright
import json

async def inspect_page():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        )
        await page.goto('https://www.pexels.com/search/videos/market-research/', wait_until='networkidle', timeout=30000)
        
        # Get all video elements, titles, and video URLs if available
        cards = await page.eval_on_selector_all('article', '''
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
        
        print(f'Found {len(cards)} video cards')
        for c in cards[:15]:
            print(c)
            
        with open('scratch/mr_video_cards.json', 'w') as f:
            json.dump(cards, f, indent=2)
            
        await browser.close()

asyncio.run(inspect_page())
