import urllib.request
import json
import re

# Let's inspect these video IDs on Pexels
video_ids = ['3129671', '3195394', '3209828', '3141207', '855564', '853889', '857251']

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
}

for vid in video_ids:
    url = f'https://www.pexels.com/video/{vid}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            title = re.findall(r'<title>(.*?)</title>', html)
            h1 = re.findall(r'<h1[^>]*>(.*?)</h1>', html)
            # Find UHD or HD mp4 link
            uhd = re.findall(r'https://videos\.pexels\.com/video-files/' + vid + r'/[^\s\"\'<>]+\.mp4', html)
            print(f'ID {vid}: {title[0] if title else "No title"}')
            print(f'   MP4 options: {list(set(uhd))[:2]}')
    except Exception as e:
        print(f'Error for {vid}: {e}')
