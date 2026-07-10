# Python solution for 2025-09-10
# Array Diff
def array_diff(arr1, arr2):
    res = []
    for el1 in arr1:
        if el1 not in arr2:
            res.append(el1)

    for el2 in arr2:
        if el2 not in arr1:
            res.append(el2)

    return sorted(res)
"""
# Array Diff - SHORTER VERSION
def array_diff(arr1, arr2):
    return sorted(set(arr1) ^ set(arr2))
"""