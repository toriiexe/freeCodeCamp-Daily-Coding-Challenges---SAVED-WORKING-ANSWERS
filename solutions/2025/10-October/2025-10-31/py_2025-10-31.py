# Python solution for 2025-10-31
# SpOoKy~CaSe
def spookify(boo):
    boo = boo.replace('_', '~').replace('-', '~')

    result = []
    count = 0

    for ch in boo:
        if ch == '~':
            result.append('~')
        else:
            if count % 2 == 0:
                result.append(ch.upper())
            else:
                result.append(ch.lower())
            count += 1

    return ''.join(result)