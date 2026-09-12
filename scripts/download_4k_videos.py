import urllib.request
import os
import shutil

os.makedirs('public/videos', exist_ok=True)

videos = [
    {
        'name': 'hero_global_network_4k.mp4',
        'url': 'https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4',
        'thumb_src': 'scratch/thumbs/3129671.jpg',
        'thumb_dst': 'public/videos/hero_global_network_thumb.jpg'
    },
    {
        'name': 'hero_data_matrix_4k.mp4',
        'url': 'https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4',
        'thumb_src': 'scratch/thumbs/3141207.jpg',
        'thumb_dst': 'public/videos/hero_data_matrix_thumb.jpg'
    }
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

for item in videos:
    dst = os.path.join('public/videos', item['name'])
    if os.path.exists(item['thumb_src']):
        shutil.copy(item['thumb_src'], item['thumb_dst'])
        print(f"Copied thumb to {item['thumb_dst']}")
    
    if os.path.exists(dst) and os.path.getsize(dst) > 1000000:
        print(f"Already downloaded: {dst} ({os.path.getsize(dst)} bytes)")
        continue

    print(f"Downloading {item['name']} from {item['url']}...")
    req = urllib.request.Request(item['url'], headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            with open(dst, 'wb') as f:
                while chunk := resp.read(1024 * 1024):
                    f.write(chunk)
        print(f"Successfully downloaded {dst} ({os.path.getsize(dst)} bytes)")
    except Exception as e:
        print(f"Failed to download {item['name']}: {e}")
