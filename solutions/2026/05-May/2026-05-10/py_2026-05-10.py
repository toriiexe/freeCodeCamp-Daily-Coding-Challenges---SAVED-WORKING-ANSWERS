# Python solution for 2026-05-10
# ISBN-13 Validator
def is_valid_isbn_13(s):
    s = s.replace('-', '')

    if len(s) != 13 or not s.isdigit():
        return False

    total = 0

    for i, ch in enumerate(s):
        digit = int(ch)
        total += digit if i % 2 == 0 else digit * 3

    return total % 10 == 0