import urllib.request
import re
import urllib.parse
import json

queries = [
    'pexels stock video corporate team discussion office',
    'pexels stock video business people analyzing data screen',
    'pexels stock video focus group consumer research meeting',
    'pexels stock video business presentation data dashboard'
]

# Let's search duckduckgo or scrape candidate video IDs from Pexels
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
}

# Let's test well-known Pexels video IDs of office teams, analysts, consumers, and data presentation:
# E.g.:
# 3195394 (lab), 3129671 (network)
# Let's test other popular high quality 4K video IDs on Pexels:
test_ids = [
    '3196564', # business meeting / presentation
    '3195390',
    '3191572',
    '3191574',
    '3252445', # office team analyzing data
    '3196024',
    '3192070',
    '3196061',
    '7565438', # team reviewing data on screens
    '7565860',
    '5377700', # business meeting discussion
    '855564',  # crowd pedestrians
    '853889',  # business presentation
    '857251'
]

for vid in test_ids:
    url = f'https://www.pexels.com/download/video/{vid}/'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            final_url = resp.geturl()
            print(f'ID {vid}: redirected to {final_url}')
    except Exception as e:
        print(f'ID {vid} failed: {e}')
