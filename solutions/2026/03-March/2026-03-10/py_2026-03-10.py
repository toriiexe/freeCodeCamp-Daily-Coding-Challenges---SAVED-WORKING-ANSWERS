# Python solution for 2026-03-10
# Array Insertion
def insert_into_array(arr, value, index):
    arr.append(None)

    for i in range(len(arr) - 1, index, -1):
        arr[i] = arr[i - 1]

    arr[index] = value
    return arr


"""
# Array Insertion - SHORTER VERSION
def insert_into_array(arr, value, index):
    arr.insert(index, value)
    return arr
"""