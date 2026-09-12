import urllib.request
import re

# Let's test Pexels public video CDN links
test_urls = [
    'https://images.pexels.com/videos/3129671/free-video-3129671.jpg',
    # Video CDN subdomains
    'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=164&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e77635&profile_id=165&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/517090025.hd.mp4?s=f53a48e71816f1c4e723de4f90bf43b7430bb224&profile_id=175&oauth2_token_id=57447761',
    'https://player.vimeo.com/external/392085732.hd.mp4?s=4a3d4f1a2ef29f04642ab66da466854ab016b801&profile_id=174&oauth2_token_id=57447761',
    # Cloudflare / video streaming examples
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
]

headers = {'User-Agent': 'Mozilla/5.0'}

for u in test_urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            print('SUCCESS [', resp.status, ']:', u[:70], '->', resp.headers.get('Content-Type'), resp.headers.get('Content-Length'))
    except Exception as e:
        print('FAILED:', u[:70], '->', e)
