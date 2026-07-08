# Python solution for 2026-01-10
# Tic-Tac-Toe
def tic_tac_toe(board):
    lines = (
        board +
        [[board[r][c] for r in range(3)] for c in range(3)] +
        [
            [board[i][i] for i in range(3)],
            [board[i][2 - i] for i in range(3)]
        ]
    )

    for line in lines:
        if line[0] == line[1] == line[2]:
            return f'{line[0]} wins'

    return 'Draw'