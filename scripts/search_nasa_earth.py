import urllib.request
import json

queries = ['earth night lights 4k', 'global network earth', 'blue marble global', 'data visualization earth']

for q in queries:
    url = f'https://svs.gsfc.nasa.gov/api/search/?q={urllib.parse.quote(q)}&format=json'
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results = data.get('results', [])
            print(f'\nQuery \"{q}\" returned {len(results)} items:')
            for item in results[:3]:
                print(f"  ID: {item.get('id')}, Title: {item.get('title')}")
    except Exception as e:
        print(f'Error for {q}: {e}')
