# Python solution for 2026-01-28
# Flatten the Array
def flatten(arr):
    res = []
    for x in arr:
        if isinstance(x, list):
            res.extend(flatten(x))
        else:
            res.append(x)
    return res