# Python solution for 2025-12-07
# String Compression
def compress_string(sentence):
    words = []
    res = ''

    for w in sentence.split():
        if not words:
            words.append(w)
            continue
        
        if w == words[0]:
            words.append(w)
        else:
            if len(words) > 1:
                res += f'{words[0]}({len(words)}) '
            else:
                res += f'{words[0]} '
            words = [w]

    if len(words) > 1:
        res += f'{words[0]}({len(words)})'
    else:
        res += words[0]

    return res