# Python solution for 2026-06-28
# Connect 3
def connect_three(matrix):
    rows = len(matrix)
    cols = len(matrix[0])

    def find(x, y, player):
        if x >= rows or y < 0:
            return False

        if matrix[x][y] == player:
            # ↓
            if x + 2 < rows:
                if matrix[x+1][y] == player and matrix[x+2][y] == player:
                    return [player, [x, y], [x+1, y], [x+2, y]]
            # ←
            if y - 2 >= 0:
                if matrix[x][y-1] == player and matrix[x][y-2] == player:
                    return [player, [x, y-2], [x, y-1], [x, y]]
            # ↙
            if x + 2 < rows and y - 2 >= 0:
                if matrix[x+1][y-1] == player and matrix[x+2][y-2] == player:
                    return [player, [x, y], [x+1, y-1], [x+2, y-2]]
            # ↖
            if x - 2 >= 0 and y - 2 >= 0:
                if matrix[x-1][y-1] == player and matrix[x-2][y-2] == player:
                    return [player, [x-2, y-2], [x-1, y-1], [x, y]]
            # ↘
            if x + 2 < rows and y + 2 < cols:
                if matrix[x+1][y+1] == player and matrix[x+2][y+2] == player:
                    return [player, [x, y], [x+1, y+1], [x+2, y+2]]
            # ↗
            if x - 2 >= 0 and y + 2 < cols:
                if matrix[x-1][y+1] == player and matrix[x-2][y+2] == player:
                    return [player, [x-2, y+2], [x-1, y+1], [x, y]]
                    
        if y + 1 < cols:
            return find(x, y + 1, player)
        else:
            return find(x + 1, 0, player)

    r = find(0, 0, "R")
    if r:
        return r
    y = find(0, 0, "Y")
    if y:
        return y
    return []