# Python solution for 2026-04-27
# Word Score
def get_word_score(word):
    return sum(ord(w) - ord('A') + 1 for w in word.upper())