# Python solution for 2025-11-28
# Word Guesser
def compare(word, guess):
    d = {chr(65+i): word.count(chr(65+i)) for i in range(26)}

    res = ['0'] * len(word)

    for i, ch in enumerate(guess):
        if ch == word[i]:
            res[i] = '2'
            d[ch] -= 1

    for i, ch in enumerate(guess):
        if res[i] == '0' and d.get(ch, 0) > 0:
            res[i] = '1'
            d[ch] -= 1

    return ''.join(res)