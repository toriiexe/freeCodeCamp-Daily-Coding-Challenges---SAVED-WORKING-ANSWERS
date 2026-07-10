# Python solution for 2025-09-17
# Slug Generator
def generate_slug(s):
    s = ' '.join(s.split())
    res = ''

    for c in s:
        if c.isalnum():
            res += c.lower()
        elif c == ' ':
            res += '%20'

    return res