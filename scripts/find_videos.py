import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

search_terms = ['data%20analytics', 'global%20network', 'technology%20market%20research']

for term in search_terms:
    page_url = f'https://www.pexels.com/search/videos/{term}/'
    try:
        req = urllib.request.Request(page_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            mp4_matches = re.findall(r'https://[^\s\"\'<>]+\.mp4[^\s\"\'<>]*', html)
            print(f'Term: {term}, found {len(mp4_matches)} mp4s')
            for m in list(set(mp4_matches))[:5]:
                print('  Found:', m)
    except Exception as e:
        print(f'Error for {term}: {e}')
