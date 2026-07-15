# Python solution for 2026-04-24
# Word Compressor
def compress(s):
    first_pos = {}
    result = []

    for i, word in enumerate(s.split(), start=1):
        if word in first_pos:
            result.append(str(first_pos[word]))
        else:
            first_pos[word] = i
            result.append(word)

    return ' '.join(result)