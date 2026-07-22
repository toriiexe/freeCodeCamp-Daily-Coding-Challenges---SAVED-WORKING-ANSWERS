# Python solution for 2025-12-04
# Permutation Count
def fact(n):
    if n == 0 or n == 1:
        return 1
    return n * fact(n - 1)

def count_permutations(s):
    chars = {}

    for c in s:
        if c not in chars:
            chars[c] = 1
        else:
            chars[c] += 1

    repetition_factor = 1
    for v in chars.values():
        repetition_factor *= fact(v)

    return fact(len(s)) // repetition_factor