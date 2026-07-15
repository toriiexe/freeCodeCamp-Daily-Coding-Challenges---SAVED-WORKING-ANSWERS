# Python solution for 2026-01-17
# Knight Moves
def knight_moves(position):
    directions = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2]
    ]

    column = ord(position[0]) - ord('A')
    row = int(position[1]) - 1

    valid_moves = []

    for move in directions:
        new_column = column + move[0]
        new_row = row + move[1]

        if 0 <= new_column <= 7 and 0 <= new_row <= 7:
            valid_moves.append([new_column, new_row])

    return len(valid_moves)