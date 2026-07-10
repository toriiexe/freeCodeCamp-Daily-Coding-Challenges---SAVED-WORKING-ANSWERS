# Python solution for 2025-09-16
# Sentence Capitalizer
def capitalize(paragraph):
    res = ''
    bigLetter = True

    for c in paragraph:
        if bigLetter and c.isalpha():
            res += c.upper()
            bigLetter = False
        else:
            res += c

        if c in '.?!':
            bigLetter = True

    return res