# Python solution for 2026-04-25
# Word Decompressor
def decompress(s):
    first_pos = {}
    result = []

    for i, token in enumerate(s.split(), start=1):
        if token.isdigit():
            result.append(first_pos[int(token)])
        else:
            first_pos[i] = token
            result.append(token)

    return ' '.join(result)