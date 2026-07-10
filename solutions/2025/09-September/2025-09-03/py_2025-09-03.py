# Python solution for 2025-09-03
# Pangram
def is_pangram(sentence, letters):
    s = ''.join([c for c in sentence if c.isalpha()])
    sentence_set = set(s.lower())
    letters_set = set(letters.lower())
    return sentence_set == letters_set