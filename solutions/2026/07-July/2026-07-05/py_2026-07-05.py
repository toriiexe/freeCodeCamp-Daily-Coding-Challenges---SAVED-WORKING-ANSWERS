# Python solution for 2026-07-05
# Bucket Fill
def fill(i, j, grid, value_to_change, new_value):
    if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]):
        return
    if grid[i][j] != value_to_change:
        return

    grid[i][j] = new_value

    fill(i-1, j, grid, value_to_change, new_value)
    fill(i+1, j, grid, value_to_change, new_value)
    fill(i, j-1, grid, value_to_change, new_value)
    fill(i, j+1, grid, value_to_change, new_value)

    return grid


def bucket_fill(grid, pos, new_value):
    value_to_change = grid[pos[0]][pos[1]]
    if value_to_change == new_value:
        return grid
    
    fill(pos[0], pos[1], grid, value_to_change, new_value)
    
    return grid