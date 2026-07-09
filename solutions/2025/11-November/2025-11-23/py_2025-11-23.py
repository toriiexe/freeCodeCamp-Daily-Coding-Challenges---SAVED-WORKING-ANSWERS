# Python solution for 2025-11-23
# Character Count
def count_characters(sentence):
    res = []
    chars = set(sentence.lower())

    for ch in chars:
        if ch.isalpha():
            res.append(f'{ch} {sentence.lower().count(ch)}')

    return sorted(res, key=lambda c: c.split()[0])