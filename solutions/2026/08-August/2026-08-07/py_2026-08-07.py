# Python solution for 2026-08-07
# Nonogram Validator
def is_valid_nonogram(clue, cells):
    cells_str = [s for s in ''.join(map(str, cells)).split('0') if s]

    if len(clue) != len(cells_str):
        return False

    for i, cell in enumerate(cells_str):
        if len(cell) != clue[i]:
            return False

    return True