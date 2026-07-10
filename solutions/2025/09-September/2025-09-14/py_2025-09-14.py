# Python solution for 2025-09-14
# Word Frequency
def get_words(paragraph):
    p = paragraph.lower().replace(',', '').replace('.', '').replace('!', '')

    d = {}

    for word in p.split():
        if word in d:
            d[word] += 1
        else:
            d[word] = 1

    desc = sorted(d.items(), key=lambda item: item[1], reverse=True)

    return [word for word, count in desc[:3]]

"""
# Word Frequency - MORE ADVANCED VERSION
import re
from collections import Counter
def get_words(paragraph):
    w = re.findall(r"[a-z']*[a-z][a-z']*", paragraph.lower())
    return [word for word, _ in Counter(w).most_common(3)]
"""