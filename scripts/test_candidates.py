import urllib.request

candidates = [
    # Wikimedia Commons direct video URLs (upload.wikimedia.org)
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c0/Big_Buck_Bunny_4K.webm/Big_Buck_Bunny_4K.webm.1080p.vp9.webm',
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/1/18/Virtual_Earth_simulation_video.webm/Virtual_Earth_simulation_video.webm.1080p.vp9.webm',
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d4/Global_sea_surface_temperatures_and_currents.webm/Global_sea_surface_temperatures_and_currents.webm.1080p.vp9.webm',
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/2/22/Earth_Western_Hemisphere_Animation.webm/Earth_Western_Hemisphere_Animation.webm.1080p.vp9.webm',
    # NASA SVS direct URLs
    'https://svs.gsfc.nasa.gov/vis/a010000/a011100/a011156/black_marble_1080p.mp4',
    'https://svs.gsfc.nasa.gov/vis/a010000/a011100/a011156/blackmarble2016_1080p.mp4',
    'https://svs.gsfc.nasa.gov/vis/a010000/a013000/a013054/13054_Terra_MODIS_Global_Composite_1080.mp4',
    'https://svs.gsfc.nasa.gov/vis/a010000/a013800/a013838/13838_Sea_Ice_Minimum_2021_1080.mp4',
    'https://svs.gsfc.nasa.gov/vis/a010000/a014000/a014032/14032_EarthDay2022_1080.mp4',
    # Other reliable CDN URLs
    'https://v.ftcdn.net/05/23/73/68/700_F_523736802_sKjZ6h6aO5K3y6C7W8o8D1rVv9m1Z7K8_ST.mp4',
    'https://cdn.pixabay.com/video/2020/05/25/40133-424754593_large.mp4',
    'https://cdn.pixabay.com/video/2016/09/13/5053-182604675_large.mp4',
    'https://cdn.pixabay.com/video/2021/04/12/70889-536968038_large.mp4',
    'https://cdn.pixabay.com/video/2019/04/23/23011-332470125_large.mp4',
    'https://cdn.pixabay.com/video/2022/10/18/135384-762283307_large.mp4'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for c in candidates:
    try:
        req = urllib.request.Request(c, headers=headers)
        with urllib.request.urlopen(req, timeout=6) as resp:
            content_type = resp.headers.get('Content-Type')
            content_length = resp.headers.get('Content-Length')
            print(f'SUCCESS [Status: {resp.status}]: {c} -> {content_type}, {content_length} bytes')
    except Exception as e:
        print(f'FAILED: {c} -> {e}')
