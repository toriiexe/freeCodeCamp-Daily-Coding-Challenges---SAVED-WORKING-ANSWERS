# Python solution for 2026-05-14
# Mirror Image
def is_mirror_image(s1, s2):
    symetric_chars = 'WTYUIOHAXVMwoxv08=+:|-_*^!. '
    swaps = {
        '[':']', ']':'[',
        '{':'}', '}':'{',
        '<':'>', '>':'<',
        'b':'d', 'd':'b',
        'p':'q', 'q':'p',
        '(':')', ')':'('
    }

    if len(s1) != len(s2):
        return False

    s2_reversed = s2[::-1]

    for i in range(len(s1)):
        if s1[i] not in symetric_chars and s1[i] not in swaps:
            return False

        if s1[i] in swaps:
            if swaps[s1[i]] != s2_reversed[i]:
                return False
        else:
            if s1[i] != s2_reversed[i]:
                return False

    return True