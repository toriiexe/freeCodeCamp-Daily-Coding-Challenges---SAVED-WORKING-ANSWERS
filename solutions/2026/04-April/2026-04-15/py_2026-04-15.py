# Python solution for 2026-04-15
# Sorted Array Swap
def sort_and_swap(arr):
    arr = sorted(arr)

    for i in range(3, len(arr), 3):
        arr[i], arr[i - 1] = arr[i - 1], arr[i]

    return arr