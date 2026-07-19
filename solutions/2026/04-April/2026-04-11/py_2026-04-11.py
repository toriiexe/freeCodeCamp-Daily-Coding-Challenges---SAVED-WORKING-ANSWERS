# Python solution for 2026-04-11
# Rook and Bishop Attack
def rook_bishop_attack(rook, bishop):
    if rook[0] == bishop[0] or rook[1] == bishop[1]:
        return 'rook'

    if abs(ord(rook[0]) - ord(bishop[0])) == abs(int(rook[1]) - int(bishop[1])):
        return 'bishop'

    return 'neither'

"""
# Rook and Bishop Attack - ANOTHER SOLUTION
def rook_bishop_attack(rook, bishop):
    rook_x, rook_y = rook[0], rook[1]

    rook_moves = []

    for i in range(1,9):
        rook_moves.append(f'{rook_x}{i}')
        rook_moves.append(f'{chr(ord(rook_x) + i - 1)}{rook_y}')

    bishop_x, bishop_y = bishop[0], bishop[1]

    bishop_moves = []
    temp_x, temp_y = bishop_x, bishop_y

    while temp_x <= 'H' and temp_y <= '8':
        bishop_moves.append(f'{temp_x}{temp_y}')
        temp_x = chr(ord(temp_x) + 1)
        temp_y = chr(ord(temp_y) + 1)

    temp_x, temp_y = bishop_x, bishop_y

    while temp_x <= 'H' and temp_y >= '1':
        bishop_moves.append(f'{temp_x}{temp_y}')
        temp_x = chr(ord(temp_x) + 1)
        temp_y = chr(ord(temp_y) - 1)

    temp_x, temp_y = bishop_x, bishop_y

    while temp_x >= 'A' and temp_y >= '1':
        bishop_moves.append(f'{temp_x}{temp_y}')
        temp_x = chr(ord(temp_x) - 1)
        temp_y = chr(ord(temp_y) - 1)

    temp_x, temp_y = bishop_x, bishop_y

    while temp_x >= 'A' and temp_y <= '8':
        bishop_moves.append(f'{temp_x}{temp_y}')
        temp_x = chr(ord(temp_x) - 1)
        temp_y = chr(ord(temp_y) + 1)


    if bishop in rook_moves:
        return 'rook'
    elif rook in bishop_moves:
        return 'bishop'
    else:
        return 'neither'
"""