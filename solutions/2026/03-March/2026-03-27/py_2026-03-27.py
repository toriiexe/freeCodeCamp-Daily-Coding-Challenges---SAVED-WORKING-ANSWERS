# Python solution for 2026-03-27
# Truncate the Text 2
def truncate_text(s):
    width1 = 'ilI.'
    width2 = 'fjrt '
    width3 = 'abcdeghkmnopqrstuvwxyzJL'
    width4 = 'ABCDEFGHKMNOPQRSTUVWXYZ'

    total = 0
    res = ''

    for c in s:
        if c in width1:
            total += 1
        elif c in width2:
            total += 2
        elif c in width3:
            total += 3
        elif c in width4:
            total += 4

        if total > 50:
            if c in width1:
                total -= 1
            elif c in width2:
                total -= 2
            elif c in width3:
                total -= 3
            elif c in width4:
                total -= 4

            total += 3

            while total > 50:
                last_c = res[-1]
                if last_c in width1:
                    total -= 1
                elif last_c in width2:
                    total -= 2
                elif last_c in width3:
                    total -= 3
                elif last_c in width4:
                    total -= 4
                res = res[:-1]

            res += '...'
            break

        res += c

    return res