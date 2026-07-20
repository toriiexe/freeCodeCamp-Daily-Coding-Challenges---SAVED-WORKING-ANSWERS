# Python solution for 2026-04-14
# Last Letter
def get_last_letter(s):
    last_letter = ''
    for c in s:
        if c.isalpha():
            if last_letter.lower() < c.lower():
                last_letter = c
    return last_letter
