# Python solution for 2026-01-14
# Markdown Link Parser
def parse_link(markdown):
    text, href = markdown.split('](')
    text = text[1:]
    href = href[:-1]
    return f'<a href="{href}">{text}</a>'