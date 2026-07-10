# Python solution for 2025-09-25
# 2nd Largest
def second_largest(arr):
    first_largest_num = float('-inf')
    second_largest_num = float('-inf')

    for n in arr:
        if n > first_largest_num:
            second_largest_num = first_largest_num
            first_largest_num = n
        elif n > second_largest_num and n != first_largest_num:
            second_largest_num = n

    return second_largest_num

"""
# 2nd Largest - SHORTER VERSION
def second_largest(arr):
    return sorted(list(set(arr)), reverse=True)[1]
"""