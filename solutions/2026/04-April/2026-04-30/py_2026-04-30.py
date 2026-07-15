# Python solution for 2026-04-30
# Binary Crossword
def is_in_crossword(char):
    board = [
        "01000001",
        "01101111",
        "01000100",
        "01100101",
        "01010010",
        "01010100",
        "01101000",
        "10101110"
    ]

    row = [chr(int(board[i], 2)) for i in range(len(board))]

    row_reversed = [chr(int(board[i][::-1], 2)) for i in range(len(board))]

    col = [chr(int("".join(board[i][j] for i in range(8)), 2))for j in range(8)]

    col_reversed = [chr(int("".join(board[i][j] for i in range(8))[::-1], 2)) for j in range(8)]

    if char in row or char in row_reversed or char in col or char in col_reversed:
        return True
    else:
        return False