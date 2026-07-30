# Python solution for 2025-10-07
# Space Week Day 4: Landing Spot
def find_landing_spot(matrix):
    dicts = [
        [0, 1],
    [-1, 0], [1, 0],
        [0, -1]
    ]

    lowest_risk = float('inf')
    coords = []

    for r in range(len(matrix)):
        for c in range(len(matrix[r])):
            if matrix[r][c] == 0:
                s = 0
                
                for d in dicts:
                    dx = r + d[0]
                    dy = c + d[1]

                    if not (dx < 0 or dx >= len(matrix) or dy < 0 or dy >= len(matrix[r])):
                        s += matrix[dx][dy]

                if s < lowest_risk:
                    lowest_risk = s
                    coords = [r, c]
    return coords