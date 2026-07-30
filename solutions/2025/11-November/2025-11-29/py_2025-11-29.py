# Python solution for 2025-11-29
# Ball Trajectory
def get_next_location(matrix):
    prev = [0, 0]
    for r in range(len(matrix)):
        if 1 in matrix[r]:
            prev = [r, matrix[r].index(1)]

    curr = [0, 0]
    for r in range(len(matrix)):
        if 2 in matrix[r]:
            curr = [r, matrix[r].index(2)]

    dx = curr[0] - prev[0]
    dy = curr[1] - prev[1]
    
    nxt_x = curr[0] + dx
    nxt_y = curr[1] + dy

    if nxt_x < 0 or nxt_x >= len(matrix):
        dx = -dx
        nxt_x = curr[0] + dx

    if nxt_y < 0 or nxt_y >= len(matrix[0]):
        dy = -dy
        nxt_y = curr[1] + dy

    return [nxt_x, nxt_y]