# Python solution for 2026-03-15
# Captured Chess Pieces
def get_captured_value(pieces):
    board = {
        'P': 1,
        'R': 5,
        'N': 3,
        'B': 3,
        'Q': 9,
        'K': 0
    }

    if not 'K' in pieces:
        return 'Checkmate'

    total = 8 * 1 + 2 * 5 + 2 * 3 + 2 * 3 + 1 * 9

    for piece in pieces:
        total -= board[piece]
        
    return total