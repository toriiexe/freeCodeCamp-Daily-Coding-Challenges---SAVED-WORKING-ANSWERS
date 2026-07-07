# Python solution for 2025-12-09
# Most Frequent
def most_frequent(arr):
    d = {}
    for el in arr:
        d[el] = d.get(el, 0) + 1
    return max(d, key=d.get)

"""
# Most Frequent - WITH LIBRARY VERSION
from collections import Counter

def most_frequent(arr):
    return Counter(arr).most_common(1)[0][0]
"""