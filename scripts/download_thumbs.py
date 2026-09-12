import urllib.request
import os

ids = ['3129671', '3195394', '3209828', '3141207', '855564', '853889', '857251']
os.makedirs('scratch/thumbs', exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0'}

for vid in ids:
    thumb_url = f'https://images.pexels.com/videos/{vid}/free-video-{vid}.jpg'
    out_path = f'scratch/thumbs/{vid}.jpg'
    try:
        req = urllib.request.Request(thumb_url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            with open(out_path, 'wb') as f:
                f.write(resp.read())
            print(f'Saved thumbnail for {vid} -> {out_path} ({os.path.getsize(out_path)} bytes)')
    except Exception as e:
        print(f'Failed {vid}: {e}')
