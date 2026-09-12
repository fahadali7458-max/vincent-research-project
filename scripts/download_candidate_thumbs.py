import urllib.request
import os

os.makedirs('scratch/candidate_thumbs', exist_ok=True)
candidate_ids = ['3196564', '3191572', '3191574', '3196061', '853889', '857251']

headers = {'User-Agent': 'Mozilla/5.0'}

for vid in candidate_ids:
    thumb_url = f'https://images.pexels.com/videos/{vid}/free-video-{vid}.jpg'
    out_path = f'scratch/candidate_thumbs/{vid}.jpg'
    try:
        req = urllib.request.Request(thumb_url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            with open(out_path, 'wb') as f:
                f.write(resp.read())
            print(f'Saved {vid} -> {out_path} ({os.path.getsize(out_path)} bytes)')
    except Exception as e:
        print(f'Failed {vid}: {e}')
