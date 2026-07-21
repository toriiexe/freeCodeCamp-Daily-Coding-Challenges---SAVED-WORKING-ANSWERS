# Python solution for 2025-12-13
# Game of Life
def game_of_life(grid):
    neighbours = [
        [-1, 1], [0, 1], [1, 1],
        [-1, 0],         [1, 0],
        [-1, -1], [0, -1], [1, -1]
    ]

    res = []

    for r in range(len(grid)):
        line = []

        for c in range(len(grid[r])):
            neighbours_counter = 0

            for neighbour in neighbours:
                nx = r + neighbour[0]
                ny = c + neighbour[1]

                if 0 <= nx < len(grid) and 0 <= ny < len(grid[0]):
                    if grid[nx][ny] == 1:
                        neighbours_counter += 1

            if grid[r][c] == 0:
                if neighbours_counter == 3:
                    line.append(1)
                else:
                    line.append(0)
            else:
                if neighbours_counter in (2, 3):
                    line.append(1)
                else:
                    line.append(0)

        res.append(line)

    return res