# Python solution for 2026-03-02
# Sum the Letters
def sum_letters(s):
    return sum(ord(c) - ord('A') + 1 for c in s.upper() if c.isalpha())