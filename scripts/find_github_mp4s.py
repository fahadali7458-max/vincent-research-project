import urllib.request
import re
import json

# Search DuckDuckGo HTML for raw.githubusercontent.com mp4 videos related to tech / data / network
query = 'site:raw.githubusercontent.com filetype:mp4 (network OR data OR globe OR technology OR background)'
url = f'https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}'

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https?://raw\.githubusercontent\.com/[^\s\"\'<>]+\.mp4', html)
        print(f'Found {len(matches)} raw github mp4s:')
        for m in list(set(matches))[:15]:
            print(' ', m)
except Exception as e:
    print('Error:', e)
