# Python solution for 2026-04-21
# Odd Words
def get_odd_words(s):
    res = []
    for word in s.split():
        if len(word) % 2 == 1:
            res.append(word)
    return ' '.join(res)