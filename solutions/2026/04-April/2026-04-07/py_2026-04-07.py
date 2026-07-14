# Python solution for 2026-04-07
# Palindrome Characters
def palindrome_locator(s):
    str_length = len(s)
    if s == s[::-1]:
        if str_length % 2 == 1:
            return s[str_length//2]
        else:
            return s[str_length//2-1] + s[str_length//2]
    return 'none'