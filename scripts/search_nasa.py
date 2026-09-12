import urllib.request
import json
import re

# NASA SVS has incredible 4K global data telemetry visualizations!
# Let's search NASA SVS for Earth data network / night lights / global data
url = 'https://svs.gsfc.nasa.gov/api/search/?q=earth+data+visualization+night+lights+global&format=json'

req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        results = data.get('results', [])
        print(f'Found {len(results)} NASA SVS items:')
        for item in results[:5]:
            print(item.get('id'), item.get('title'))
except Exception as e:
    print('Error:', e)
