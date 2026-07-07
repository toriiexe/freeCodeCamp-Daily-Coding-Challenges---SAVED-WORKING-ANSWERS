# Python solution for 2025-12-10
# Markdown Bold Parser
import re
def parse_bold(markdown):
    return re.sub(r'\*\*(\S(?:.*?\S)?)\*\*|__(\S(?:.*?\S)?)__', lambda m: f'<b>{m.group(1) or m.group(2)}</b>', markdown)