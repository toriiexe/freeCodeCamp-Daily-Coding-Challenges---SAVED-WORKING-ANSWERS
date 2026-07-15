# Python solution for 2026-07-15
# Array Chunks
def chunk_array(arr, size):
    res = []
    
    for i in range(0, len(arr), size):
        res.append(arr[i:i+size])

    return res