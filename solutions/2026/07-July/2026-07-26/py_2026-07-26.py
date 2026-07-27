# Python solution for 2026-07-26
# Letter Distance
def letter_distance(str1, str2):
    total_dist = 0

    for s1, s2 in zip(str1, str2):
        diff = abs(ord(s1) - ord(s2))
        total_dist += min(diff, 26 - diff)

    return total_dist

"""
# Letter Distance
def letter_distance(str1, str2):
    alp = 'abcdefghijklmnopqrstuvwxyz'
    total_dist = 0

    for s1, s2 in zip(str1, str2):
        diff = abs(alp.index(s1) - alp.index(s2))
        total_dist += min(diff, 26 - diff)

    return total_dist
"""