import urllib.request
import re
import urllib.parse
import time

queries = [
    'site:pexels.com/video "data"',
    'site:pexels.com/video "analytics"',
    'site:pexels.com/video "network"',
    'site:pexels.com/video "digital globe"',
    'site:pexels.com/video "market"',
    'site:pexels.com/video "cyber"',
    'site:pexels.com/video "matrix"',
    'site:pexels.com/video "charts"'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
found_ids = []

for q in queries:
    url = f'https://html.duckduckgo.com/html/?q={urllib.parse.quote(q)}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            # Extract video urls from pexels like /video/something-12345/ or video-12345
            ids = re.findall(r'pexels\.com/video/[a-zA-Z0-9\-]+-(\d+)', html)
            print(f'Query: {q}, found {len(ids)} IDs: {ids[:5]}')
            found_ids.extend(ids)
    except Exception as e:
        print('Error:', e)
    time.sleep(1)

found_ids = list(dict.fromkeys(found_ids))
print(f'\nTotal unique IDs found: {len(found_ids)}')
print(found_ids)
