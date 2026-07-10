# Python solution for 2025-09-06
# Matrix Rotate
def rotate(matrix):
    rows = len(matrix)
    cols = len(matrix[0])

    res = [[0 for _ in range(rows)] for _ in range(cols)]

    for r in range(rows):
        for c in range(cols):
            res[c][rows - 1 - r] = matrix[r][c]

    return res