import urllib.request
import re
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
}

# Let's test diverse candidate video IDs from Pexels
# Many office/tech/meeting videos on Pexels have IDs in the 3100000 - 3300000, 7500000 - 8500000, and 5000000-6000000 range
test_ids = [
    '3196061', # strategic planning overhead with sticky notes, laptop, tablet
    '3141207',
    '3252136',
    '3252137',
    '3252140',
    '3195394',
    '3196564',
    '3196238',
    '3196240',
    '3196245',
    '3196344',
    '3196346',
    '3196348',
    '3196350',
    '3195982',
    '3195984',
    '3195988',
    '3195990',
    '3192065',
    '3192072',
    '3192074',
    '3192076',
    '3192080',
    '3192082',
    '3192084',
    '3192086',
    '3192088',
    '3192090',
    '3192092'
]

valid = []
for vid in test_ids:
    url = f'https://www.pexels.com/download/video/{vid}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=5) as resp:
            final_url = resp.geturl()
            if 'video-files' in final_url:
                print(f'Valid video {vid}: {final_url}')
                valid.append((vid, final_url))
    except Exception as e:
        pass

print('Total valid videos found:', len(valid))
