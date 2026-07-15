# Python solution for 2026-01-29
# Letters-Numbers
def separate_letters_and_numbers(s):
    prev = ''
    res = ''

    for c in s:
        if prev and ((c.isdigit() and prev.isdigit()) or (c.isalpha() and prev.isalpha())):
            res += c
        elif prev and ((c.isdigit() and prev.isalpha()) or (c.isalpha() and prev.isdigit())):
            res += '-' + c
        else:
            res += c

        prev = c

    return res