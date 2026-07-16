# Python solution for 2026-07-16
# Pig Latin Converter
def pig_latin(s):
    if not isinstance(s, str):
        return None

    if any(not word.isalpha() for word in s.split()):
        return None

    vowels = 'aeiou'
    res = []

    for word in s.split():
        to_capitalize = True if word[0].isupper() else False

        w = word.lower()
        if w[0] in vowels:
            if to_capitalize:
                res.append((w + 'way').capitalize())
            else:
                res.append(w + 'way')
        else:
            for i, ch in enumerate(w):
                if ch in vowels:
                    if to_capitalize:
                        res.append((w[i:] + w[:i] + 'ay').capitalize())
                    else:
                        res.append(w[i:] + w[:i] + 'ay')
                    break
            else:
                if to_capitalize:
                    res.append((w + 'ay').capitalize())
                else:
                    res.append(w + 'ay')

    return ' '.join(res)