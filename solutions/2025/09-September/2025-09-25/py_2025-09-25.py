# Python solution for 2025-09-25
# 2nd Largest
def second_largest(arr):
    return sorted(list(set(arr)), reverse=True)[1]