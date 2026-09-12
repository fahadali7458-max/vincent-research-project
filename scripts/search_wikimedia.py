import urllib.request
import json

# Wikimedia Commons API search for video files
params = {
    'action': 'query',
    'generator': 'search',
    'gsrsearch': 'filetype:video data visualization earth network',
    'gsrlimit': '15',
    'prop': 'imageinfo',
    'iiprop': 'url|size|mime',
    'format': 'json'
}

query_str = '&'.join([f'{k}={urllib.parse.quote(str(v))}' for k, v in params.items()])
url = f'https://commons.wikimedia.org/w/api.php?{query_str}'

req = urllib.request.Request(url, headers={'User-Agent': 'VincentResearchBot/1.0 (vincent@vincentresearch.com)'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        pages = data.get('query', {}).get('pages', {})
        print(f'Found {len(pages)} pages:')
        for pid, page in pages.items():
            title = page.get('title')
            imageinfo = page.get('imageinfo', [{}])[0]
            v_url = imageinfo.get('url')
            mime = imageinfo.get('mime')
            width = imageinfo.get('width')
            height = imageinfo.get('height')
            print(f'{title} -> {mime}, {width}x{height}, {v_url}')
except Exception as e:
    print('Error:', e)
