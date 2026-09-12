import asyncio
from playwright.async_api import async_playwright
import json

async def inspect_material():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(
            user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
        )
        print('Opening materialplus.io...')
        try:
            await page.goto('https://www.materialplus.io/', wait_until='domcontentloaded', timeout=30000)
            await page.wait_for_timeout(5000)
            
            videos = await page.eval_on_selector_all('video', '''
                videos => videos.map(v => {
                    const sources = Array.from(v.querySelectorAll('source')).map(s => s.getAttribute('src'));
                    return {
                        src: v.getAttribute('src'),
                        sources: sources,
                        poster: v.getAttribute('poster'),
                        className: v.className,
                        parent: v.parentElement ? v.parentElement.className : null
                    };
                })
            ''')
            
            print(f'Found {len(videos)} video tags on materialplus.io:')
            for v in videos:
                print(json.dumps(v, indent=2))
                
            with open('scratch/materialplus_videos.json', 'w') as f:
                json.dump(videos, f, indent=2)
        except Exception as e:
            print('Error:', e)
            
        await browser.close()

asyncio.run(inspect_material())
