import urllib.request
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

categories = ['data-analytics', 'stock-market', 'technology', 'world-map', 'cyber-security']
found = {}

for term in categories:
    url = f'https://www.pexels.com/search/videos/{term}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            matches = re.findall(r'/video/([a-zA-Z0-9\-]+)-(\d+)/', html)
            print(f'{term}: found {len(matches)} matches')
            for slug, vid in matches:
                if vid not in found:
                    found[vid] = slug
    except Exception as e:
        print(f'{term} failed: {e}')

print(f'\nTotal unique videos found: {len(found)}')
for vid, slug in list(found.items())[:20]:
    print(f'{vid}: {slug}')
