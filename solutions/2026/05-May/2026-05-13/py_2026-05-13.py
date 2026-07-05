# Python solution for 2026-05-13
# Offending element
def find_offender(arr):
    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            if i > 0 and arr[i + 1] < arr[i - 1]:
                return i + 1
            return i