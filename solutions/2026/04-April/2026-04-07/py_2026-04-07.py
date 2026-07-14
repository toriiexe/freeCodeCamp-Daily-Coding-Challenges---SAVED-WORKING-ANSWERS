# Python solution for 2026-04-07
# Palindrome Characters
def palindrome_locator(s):
    if s == s[::-1]:
        if len(s) % 2 == 1:
            return s[len(s)//2]
        else:
            return s[len(s)//2-1] + s[len(s)//2]
    return 'none'