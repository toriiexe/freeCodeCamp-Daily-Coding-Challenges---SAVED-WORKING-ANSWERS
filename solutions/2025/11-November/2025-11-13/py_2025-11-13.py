# Python solution for 2025-11-13
# Array Shift
def shift_array(arr, n):
    mod = n % len(arr)
    return arr[mod:] + arr[:mod]