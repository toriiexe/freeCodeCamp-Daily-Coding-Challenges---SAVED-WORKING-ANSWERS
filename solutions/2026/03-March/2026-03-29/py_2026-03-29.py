# Python solution for 2026-03-29
# ISBN-10 Validator
import re
def is_valid_isbn10(s):
    s = s.replace('-', '')

    if not re.fullmatch(r'[0-9]{9}[0-9X]', s):
        return False

    total = 0

    for i, char in enumerate(s, start=1):
        value = 10 if char == 'X' else int(char)
        total += value * i

    return total % 11 == 0