import urllib.request
import json

# Let's search GitHub API for MP4 files in public repositories
url = 'https://api.github.com/search/code?q=extension:mp4+filename:network+OR+filename:analytics+OR+filename:globe&per_page=10'
req = urllib.request.Request(url, headers={
    'User-Agent': 'Mozilla/5.0',
    'Accept': 'application/vnd.github.v3+json'
})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        items = data.get('items', [])
        print(f'Found {len(items)} items on GitHub:')
        for item in items:
            raw_url = item.get('html_url', '').replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/')
            print(item.get('name'), '->', raw_url)
except Exception as e:
    print('GitHub API error:', e)
