# Python solution for 2026-03-01
# Flattened
def is_flat(arr):
    for el in arr:
        if isinstance(el, list):
            return False
    return True