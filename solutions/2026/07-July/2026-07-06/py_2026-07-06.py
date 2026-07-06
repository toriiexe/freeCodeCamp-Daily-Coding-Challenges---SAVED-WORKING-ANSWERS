# Python solution for 2026-07-06
# lowercase words
def get_lowercase_words(s):
    return ' '.join([w for w in s.split() if w.islower()])