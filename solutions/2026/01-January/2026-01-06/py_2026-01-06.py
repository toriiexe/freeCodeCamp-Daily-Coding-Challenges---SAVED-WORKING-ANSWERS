# Python solution for 2026-01-06
# vOwElcAsE
def vowel_case(s):
    res = []
    for letter in s:
        if letter.lower() in 'aeiou':
            res.append(letter.upper())
        elif letter.isalpha():
            res.append(letter.lower())
        else:
            res.append(letter)
    return ''.join(res)