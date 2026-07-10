# Python solution for 2025-09-13
# Missing Numbers
def find_missing_numbers(arr):
    return [i for i in range(1, max(arr)+1) if i not in arr]