# Python solution for 2026-02-25
# Sequential Difference
def find_differences(arr):
    return [arr[i + 1] - arr[i] if i != len(arr) - 1 else 0 for i in range(len(arr))]