import urllib.request
import re

# Let's test well-known tech landing page CDN videos
tech_videos = [
    # GitHub sample repos
    'https://raw.githubusercontent.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    # Apple CDN sample videos (ultra crisp 4K HDR ProRes / H.264 / HEVC)
    'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_4x3/bipbop_4x3_variant.m3u8',
    # High-end open video repositories
    'https://cdn.jsdelivr.net/gh/coronasafe/life@master/public/videos/hero.mp4',
    # Tech portfolio / agency background videos
    'https://assets.codepen.io/3364143/7btrrd.mp4',
    'https://assets.codepen.io/6093409/river.mp4',
    # Let's test other codepen or public CDN video assets
    'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4'
]

headers = {'User-Agent': 'Mozilla/5.0'}
for v in tech_videos:
    try:
        req = urllib.request.Request(v, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            print(f'SUCCESS [Status: {resp.status}]: {v} ({resp.headers.get("Content-Length")} bytes)')
    except Exception as e:
        print(f'FAILED: {v} -> {e}')
