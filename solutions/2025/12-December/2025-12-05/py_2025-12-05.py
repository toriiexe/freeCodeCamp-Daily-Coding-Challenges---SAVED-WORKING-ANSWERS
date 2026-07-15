# Python solution for 2025-12-05
# Symmetric Difference
def difference(arr1, arr2):
    res = []

    for x in arr1:
        if x not in arr2 and x not in res:
            res.append(x)

    for y in arr2:
        if y not in arr1 and y not in res:
            res.append(y)

    return res