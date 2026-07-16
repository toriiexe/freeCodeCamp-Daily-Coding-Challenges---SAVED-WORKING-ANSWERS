# Python solution for 2025-10-15
# HTML Tag Stripper
import re
def strip_tags(html):
    return re.sub(r'<[^>]*>', '', html)