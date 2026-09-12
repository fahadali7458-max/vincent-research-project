import urllib.request

urls = [
    'https://www.materialplus.io/wp-content/uploads/2026/04/Increase_Brand_Relevance_1080px.mp4',
    'https://www.materialplus.io/wp-content/uploads/2026/04/Enter_New_Markets_1080px.mp4',
    'https://www.materialplus.io/wp-content/uploads/2026/04/Acquire_New_Customers_1080px.mp4',
    'https://www.materialplus.io/wp-content/uploads/2026/04/Differentiate_Experience_1080px.mp4',
    'https://www.materialplus.io/wp-content/uploads/2026/04/Increase_Value_1080px.mp4',
    'https://www.materialplus.io/wp-content/uploads/2026/05/USTA_Thumbnail.mp4',
    'https://www.materialplus.io/wp-content/uploads/2026/05/WHOOP_Thumbnail-1.mp4'
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Referer': 'https://www.materialplus.io/',
    'Accept': '*/*'
}

for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            print(f'SUCCESS: {u.split("/")[-1]} -> Status {resp.status}, Size: {int(resp.headers.get("Content-Length", 0))/(1024*1024):.2f} MB')
    except Exception as e:
        print(f'FAILED: {u.split("/")[-1]} -> {e}')
