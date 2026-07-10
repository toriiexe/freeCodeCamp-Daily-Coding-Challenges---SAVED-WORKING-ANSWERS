# Python solution for 2025-09-09
# Unique Characters
def all_unique(s):
    chars = []
    for c in s:
        if c in chars:
            return False
        else:
            chars.append(c)
    return True