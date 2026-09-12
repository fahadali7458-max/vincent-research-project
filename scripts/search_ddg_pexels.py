import urllib.request
import re
import urllib.parse

queries = [
    'pexels stock video "data analytics"',
    'pexels stock video "market research"',
    'pexels stock video "data visualization" 4k',
    'pexels stock video "stock market charts"',
    'pexels stock video "business intelligence"'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'}
ids = []

for q in queries:
    url = f'https://html.duckduckgo.com/html/?q={urllib.parse.quote(q)}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            found = re.findall(r'pexels\.com/video/[a-zA-Z0-9\-]*(\d{6,8})', content)
            print(f'Query: {q} -> found {len(found)}: {found[:5]}')
            ids.extend(found)
    except Exception as e:
        print(f'Query: {q} failed: {e}')

ids = list(dict.fromkeys(ids))
print('Total found IDs:', len(ids), ids)
