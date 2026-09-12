import urllib.request

ids = ['7947390', '7947393', '7947453', '7947427', '8348727', '3196061']
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

for vid in ids:
    url = f'https://www.pexels.com/download/video/{vid}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            print(f'ID {vid}: {resp.geturl()}')
    except Exception as e:
        print(f'ID {vid} error: {e}')
