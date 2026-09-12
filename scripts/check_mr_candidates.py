import urllib.request
import os

os.makedirs('scratch/candidate_mr_thumbs', exist_ok=True)
ids = ['7947393', '7947390', '6120117', '7947457']

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
}

for vid in ids:
    url = f'https://www.pexels.com/download/video/{vid}/'
    thumb_url = f'https://images.pexels.com/videos/{vid}/free-video-{vid}.jpg'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f'ID {vid} video -> {resp.geturl()[:80]}')
            
        req2 = urllib.request.Request(thumb_url, headers=headers)
        with urllib.request.urlopen(req2, timeout=10) as resp2:
            out_p = f'scratch/candidate_mr_thumbs/{vid}.jpg'
            with open(out_p, 'wb') as f:
                f.write(resp2.read())
            print(f'ID {vid} thumb -> saved ({os.path.getsize(out_p)} bytes)')
    except Exception as e:
        print(f'Failed {vid}: {e}')
