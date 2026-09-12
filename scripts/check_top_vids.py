import urllib.request
import os

ids = ['33402994', '32135560', '7947406', '7693469']
headers = {'User-Agent': 'Mozilla/5.0'}

for vid in ids:
    url = f'https://www.pexels.com/download/video/{vid}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            final_url = resp.geturl()
            print(f'ID {vid} -> {final_url}')
    except Exception as e:
        print(f'ID {vid} failed: {e}')
