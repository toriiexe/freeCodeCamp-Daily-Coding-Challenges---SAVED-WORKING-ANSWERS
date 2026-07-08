# Python solution for 2026-01-30
# Valid Pawn Moves
def find_pawn_moves(position):
    c = position[0]
    r = int(position[1])

    res = []

    if r < 8:
        res.append(f"{c}{r + 1}")
        if r == 2:
            res.append(f"{c}{r + 2}")

    return res