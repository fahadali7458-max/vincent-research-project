import urllib.request
import os

# Download images from the pexels cards json we extracted earlier
with open('scratch/mr_video_cards.json', 'r') as f:
    import json
    cards = json.load(f)

headers = {'User-Agent': 'Mozilla/5.0'}
os.makedirs('scratch/mr_previews', exist_ok=True)

for i, c in enumerate(cards[:10]):
    img_url = c.get('imgSrc')
    slug = c.get('href', '').strip('/').split('/')[-1]
    if img_url:
        try:
            req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req, timeout=5) as resp:
                p = f'scratch/mr_previews/{slug}.jpg'
                with open(p, 'wb') as f_out:
                    f_out.write(resp.read())
                print(f'Saved preview {p}')
        except Exception as e:
            print(f'Failed {slug}: {e}')
