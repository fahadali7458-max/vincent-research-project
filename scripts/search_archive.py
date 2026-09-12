import urllib.request
import json

# Archive.org search API for high-definition tech/data video
url = 'https://archive.org/advancedsearch.php?q=mediatype%3Amovies+AND+%28data+visualization+OR+cyber+network+OR+global+technology%29&fl[]=identifier,title,downloads,format&sort[]=downloads+desc&rows=15&page=1&output=json'

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        docs = data.get('response', {}).get('docs', [])
        print(f'Found {len(docs)} items on archive.org:')
        for doc in docs:
            print(doc.get('identifier'), '-', doc.get('title'))
except Exception as e:
    print('Error:', e)
