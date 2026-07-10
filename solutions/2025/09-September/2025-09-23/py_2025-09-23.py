# Python solution for 2025-09-23
# String Mirror
def is_mirror(str1, str2):
    clean1 = ''.join(c for c in str1 if c.isalpha())
    clean2 = ''.join(c for c in str2 if c.isalpha())

    return clean1 == clean2[::-1]


"""
# String Mirror - ANOTHER VERSION
def is_mirror(str1, str2):
    i = 0
    j = len(str2) - 1

    while i < len(str1) and j >= 0:
        if not str1[i].isalpha():
            i += 1
        elif not str2[j].isalpha():
            j -= 1
        else:
            if str1[i] != str2[j]:
                return False
            i += 1
            j -= 1

    return True
"""