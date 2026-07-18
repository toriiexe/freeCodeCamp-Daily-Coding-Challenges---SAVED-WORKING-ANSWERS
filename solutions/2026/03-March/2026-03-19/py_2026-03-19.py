# Python solution for 2026-03-19
# Inverted Matrix
def invert_matrix(matrix):
    values = []

    for r in range(len(matrix)):
        for c in range(len(matrix[r])):
            if matrix[r][c] not in values:
                values.append(matrix[r][c])
            if len(values) == 2:
                break
        if len(values) == 2:
            break
    
    res = []

    for row in matrix:
        temp = []
        for col in row:
            if col == values[0]:
                temp.append(values[1])
            else:
                temp.append(values[0])
        res.append(temp)

    return res