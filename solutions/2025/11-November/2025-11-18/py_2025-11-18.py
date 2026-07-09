# Python solution for 2025-11-18
# 100 Characters
def one_hundred(chars):
    res = ''
    while len(res) < 100:
        res += chars[len(res) % len(chars)]
    return res