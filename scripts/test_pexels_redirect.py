import urllib.request

video_ids = ['3129671', '855564', '853889', '3195394', '3209828', '857251', '3141207']

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

for vid in video_ids:
    url = f'https://www.pexels.com/download/video/{vid}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f'SUCCESS: {vid} redirected to -> {resp.geturl()[:80]} (Status: {resp.status})')
    except Exception as e:
        print(f'FAILED: {vid} -> {e}')
