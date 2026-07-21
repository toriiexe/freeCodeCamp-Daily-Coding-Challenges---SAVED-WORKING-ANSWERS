# Python solution for 2025-12-24
# Markdown Image Parser
import re
def parse_image(markdown):
    return re.sub(r'!\[(.+)\]\((.+)\)', r'<img src="\2" alt="\1">', markdown)