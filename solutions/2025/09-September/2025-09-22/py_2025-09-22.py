# Python solution for 2025-09-22
# Digits vs Letters
def digits_or_letters(s):
    digits_count = 0
    letters_count = 0

    for c in s:
        if c.isdigit():
            digits_count += 1
        elif c.isalpha():
            letters_count += 1

    return 'digits' if digits_count > letters_count else 'letters' if digits_count < letters_count else 'tie'