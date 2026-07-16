# Python solution for 2025-12-18
# Checkerboard
def create_board(dimensions):
    rows, cols = dimensions[0], dimensions[1]
    res = []

    for r in range(rows):
        temp = []
        for c in range(cols):
            if (r + c) % 2 == 0:
                temp.append('X')
            else:
                temp.append('O')
        res.append(temp)

    return res