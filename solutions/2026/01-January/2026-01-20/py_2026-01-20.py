# Python solution for 2026-01-20
# Consonant Case
def to_consonant_case(s):
    res = ''
    for c in s:
        if c.lower() in 'aeiou':
            res += c.lower()
        elif c == '-':
            res += '_'
        else:
            res += c.upper()

    return res