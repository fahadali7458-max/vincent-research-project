import urllib.request
import json

# Check NASA SVS Black Marble / Earth at Night
url = 'https://svs.gsfc.nasa.gov/api/11156'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print('Title:', data.get('title'))
        # Look for mp4 media files
        for media in data.get('media', []):
            for file_info in media.get('files', []):
                if file_info.get('url', '').endswith('.mp4'):
                    print('MP4:', file_info.get('width'), 'x', file_info.get('height'), file_info.get('url'))
except Exception as e:
    print('Error:', e)
