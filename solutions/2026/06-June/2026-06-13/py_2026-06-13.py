# Python solution for 2026-06-13
# Zoning Regulations
forbidden = {
    'i': ['R', 'I'],
    'A': ['C'],
    'R': ['i', 'C'],
    'I': ['i'],
    'C': ['R', 'A']
}

def get_zone_violations(grid):
    dics = [
            [0, 1],
        [-1, 0], [1, 0],
            [0, -1]
    ]

    res = []

    for r in range(len(grid)):
        for c in range(len(grid[r])):
            cell = grid[r][c]

            if cell == '':
                continue

            for d in dics:
                dx = r + d[0]
                dy = c + d[1]

                if 0 <= dx < len(grid) and 0 <= dy < len(grid[dx]):
                    neighbour = grid[dx][dy]

                    if neighbour in forbidden[cell]:
                        res.append([r, c])
                        break

    return res