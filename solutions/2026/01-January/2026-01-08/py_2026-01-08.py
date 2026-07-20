# Python solution for 2026-01-08
# Sorted Array?
def is_sorted(arr):
    asc = False
    desc = False

    for i in range(len(arr) - 1):
        if arr[i] < arr[i + 1]:
            asc = True
        elif arr[i] > arr[i + 1]:
            desc = True

    if asc and desc:
        return 'Not sorted'
    elif asc:
        return 'Ascending'
    else:
        return 'Descending'