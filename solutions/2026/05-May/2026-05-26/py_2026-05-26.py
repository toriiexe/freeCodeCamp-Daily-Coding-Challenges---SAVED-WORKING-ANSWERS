# Python solution for 2026-05-26
# Sum of Differences
def sum_of_differences(arr):
    s = 0
    length = len(arr)

    for i in range(length-1):
        s += arr[i+1] - arr[i]

    return s