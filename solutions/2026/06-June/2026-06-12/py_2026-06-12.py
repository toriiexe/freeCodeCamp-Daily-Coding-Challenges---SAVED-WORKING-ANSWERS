# Python solution for 2026-06-12
# HTML Content Extractor
import re
def extract_content(html):
    return re.sub(r'<[^>]+>', '', html).strip()