# Python solution for 2026-05-09
#Transposed Matrix
def transpose(matrix):
    m = [[None for col in range(len(matrix))] for row in range(len(matrix[0]))]

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            m[j][i] = matrix[i][j]

    return m