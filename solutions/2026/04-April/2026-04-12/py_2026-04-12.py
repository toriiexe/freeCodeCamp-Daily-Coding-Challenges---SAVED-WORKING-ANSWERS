# Python solution for 2026-04-12
# Spiral Matrix
def spiral_matrix(matrix):
    snail = []
    while len(matrix):
        snail += matrix[0]
        matrix.pop(0)
        matrix = list(zip(*matrix))[::-1]
    return snail