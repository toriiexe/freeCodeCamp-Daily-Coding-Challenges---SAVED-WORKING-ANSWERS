# Python solution for 2026-08-01
# Magic Square Solver
def solve_magic_square(grid):
    rows = [sum(row) for row in grid]
    cols = [sum(row[i] for row in grid) for i in range(len(grid[0]))]
    diag = [grid[0][0] + grid[1][1] + grid[2][2], grid[0][2] + grid[1][1] + grid[2][0]]

    all_together = set(rows + cols + diag)

    if len(all_together) > 2:
        return 'impossible'

    n1, n2 = all_together

    return abs(n1 - n2)