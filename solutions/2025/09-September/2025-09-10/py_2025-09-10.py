# Python solution for 2025-09-10
# Array Diff 
def array_diff(arr1, arr2):
    s1 = set(arr1)
    s2 = set(arr2)

    res = []

    for x in s1:
        if x not in s2:
            res.append(x)

    for y in s2:
        if y not in s1:
            res.append(y)

    return sorted(res)
"""
# Array Diff - SHORTER VERSION
def array_diff(arr1, arr2):
    return sorted(set(arr1) ^ set(arr2))
"""