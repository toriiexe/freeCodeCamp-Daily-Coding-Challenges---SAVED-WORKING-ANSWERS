# Python solution for 2025-12-20
# Purge Most Frequent
def purge_most_frequent(arr):
    res = []
    most_frequent = max([arr.count(item) for item in arr])

    for el in arr:
        if arr.count(el) != most_frequent:
            res.append(el)
            
    return res

"""
# Purge Most Frequent - ANOTHER VERSION
def purge_most_frequent(arr):
    counts = {}

    for el in arr:
        counts[el] = counts.get(el, 0) + 1

    most = max(counts.values())

    return [el for el in arr if counts[el] != most]
"""


"""
# Purge Most Frequent - ANOTHER VERSION
from collections import Counter

def purge_most_frequent(arr):
    counts = Counter(arr)
    most = max(counts.values())

    return [el for el in arr if counts[el] != most]
"""