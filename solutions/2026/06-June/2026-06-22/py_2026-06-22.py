# Python solution for 2026-06-22
# 1337 Speak
def make_leet(s):
    subs = {
        'a': '4',
        'e': '3',
        'g': '9',
        'i': '1',
        'l': '1',
        'o': '0',
        's': '5',
        't': '7'
    }

    return ''.join(subs[ch] if ch in subs else ch for ch in s)