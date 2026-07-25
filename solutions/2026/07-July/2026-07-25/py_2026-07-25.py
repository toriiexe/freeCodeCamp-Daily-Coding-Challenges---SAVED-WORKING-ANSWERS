# Python solution for 2026-07-25
# Cell Signal
from collections import Counter
def find_signal(grid):
    res = []

    for r, row in enumerate(grid):
        for c, dist in enumerate(row):
            if dist != 0:
                positions = []

                for dr in range(-dist, dist + 1):
                    for dc in range(-dist, dist + 1):
                        if max(abs(dr), abs(dc)) == dist:
                            nr = r + dr
                            nc = c + dc

                            if 0 <= nr < len(grid) and 0 <= nc < len(grid[0]):
                                positions.append([nr, nc])

                res.extend(positions)

    return list(Counter(map(tuple, res)).most_common(1)[0][0])