import urllib.request
import os

ids = ['3196344', '3196346', '3192080', '3192082', '3192084']
headers = {'User-Agent': 'Mozilla/5.0'}

for vid in ids:
    thumb_url = f'https://images.pexels.com/videos/{vid}/free-video-{vid}.jpg'
    out_path = f'scratch/candidate_thumbs/{vid}.jpg'
    try:
        req = urllib.request.Request(thumb_url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            with open(out_path, 'wb') as f:
                f.write(resp.read())
            print(f'Saved {vid} -> {out_path}')
    except Exception as e:
        print(f'Failed {vid}: {e}')
