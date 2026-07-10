# Python solution for 2025-09-04
# Vowel Repeater
def repeat_vowels(s):
    res = ''
    vowels_to_repeat = 0
    for c in s:
        if c in 'AEIOUaeiou':
            res += c + c.lower() * vowels_to_repeat
            vowels_to_repeat += 1
        else:
            res += c
    return res