# Python solution for 2026-04-17
# Hidden Key
def decode(message):
    key = 'VLHCGMDLNH'
    res = ''
    j = 0

    for ch in message:
        if ch == ' ':
            res += ' '
            continue

        shift = ord(key[j % len(key)]) - ord('A') + 1
        res += chr((ord(ch) - ord('A') - shift) % 26 + ord('A'))
        j += 1

    return res