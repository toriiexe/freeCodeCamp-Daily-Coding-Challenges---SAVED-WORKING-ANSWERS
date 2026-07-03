# Python solution for 2025-08-30
#Array Duplicates
def find_duplicates(arr):
    return sorted(num for num in set(arr) if arr.count(num) > 1)