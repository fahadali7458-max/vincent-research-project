import urllib.request
import os

items = [
    {
        'filename': 'hero_market_research_4k.mp4',
        'url': 'https://videos.pexels.com/video-files/33402994/14218774_3840_2160_25fps.mp4',
        'thumb_url': 'https://images.pexels.com/videos/33402994/pexels-photo-33402994.jpeg?cs=tinysrgb&dpr=1&w=1280',
        'thumb_name': 'hero_market_research_thumb.jpg'
    },
    {
        'filename': 'hero_team_strategy.mp4',
        'url': 'https://videos.pexels.com/video-files/7693469/7693469-hd_1920_1080_25fps.mp4',
        'thumb_url': 'https://images.pexels.com/videos/7693469/pexels-photo-7693469.jpeg?cs=tinysrgb&dpr=1&w=1280',
        'thumb_name': 'hero_team_strategy_thumb.jpg'
    }
]

headers = {'User-Agent': 'Mozilla/5.0'}
os.makedirs('public/videos', exist_ok=True)

for it in items:
    dst_vid = os.path.join('public/videos', it['filename'])
    dst_thumb = os.path.join('public/videos', it['thumb_name'])
    
    print(f"Downloading {it['filename']}...")
    req = urllib.request.Request(it['url'], headers=headers)
    with urllib.request.urlopen(req, timeout=30) as resp:
        with open(dst_vid, 'wb') as f:
            while chunk := resp.read(1024 * 1024):
                f.write(chunk)
    print(f"Downloaded {dst_vid} ({os.path.getsize(dst_vid)} bytes)")
    
    try:
        req2 = urllib.request.Request(it['thumb_url'], headers=headers)
        with urllib.request.urlopen(req2, timeout=10) as resp2:
            with open(dst_thumb, 'wb') as f2:
                f2.write(resp2.read())
        print(f"Downloaded {dst_thumb} ({os.path.getsize(dst_thumb)} bytes)")
    except Exception as e:
        print(f"Thumb failed for {it['thumb_name']}: {e}")
