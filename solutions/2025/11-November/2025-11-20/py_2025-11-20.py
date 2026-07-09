# Python solution for 2025-11-20
# Longest Word
def longest_word(sentence):
    res = ''
    length = 0

    for word in sentence.split():
        clean = ''
        lengthTemp = 0

        for w in word:
            if w.isalpha():
                clean += w
                lengthTemp += 1

        if lengthTemp > length:
            res = clean
            length = lengthTemp

    return res