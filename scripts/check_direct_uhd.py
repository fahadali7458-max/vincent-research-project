import urllib.request

urls = [
    ('Global Communication Graph 4K', 'https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_30fps.mp4'),
    ('Cyber Data Matrix 4K', 'https://videos.pexels.com/video-files/3141207/3141207-uhd_3840_2160_25fps.mp4'),
    ('Global Comm 1080p', 'https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4'),
    ('Cyber Matrix 1080p', 'https://videos.pexels.com/video-files/3141207/3141207-hd_1920_1080_25fps.mp4')
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for name, u in urls:
    req = urllib.request.Request(u, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            size_mb = int(resp.headers.get('Content-Length', 0)) / (1024 * 1024)
            print(f'{name}: Status {resp.status}, Content-Type: {resp.headers.get("Content-Type")}, Size: {size_mb:.2f} MB')
    except Exception as e:
        print(f'{name} failed: {e}')
