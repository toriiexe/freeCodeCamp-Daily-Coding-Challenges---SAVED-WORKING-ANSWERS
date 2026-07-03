# Python solution for 2025-08-15
#jbelmud text
def jbelmu(text):
    words = text.split()
    res = []
    for word in words:
        if len(word) <= 2:
            res.append(word)
        else:
            mid = ''.join(sorted(word[1:-1]))
            res.append(word[0] + mid + word[-1])
    return ' '.join(res)