# Python solution for 2026-04-09
# Next Bingo Number
def get_next_bingo_number(n):
    letters = {
        1: 'B',
        16: 'I',
        31: 'N',
        46: 'G',
        61: 'O'
    }

    num = int(n[1:]) + 1

    if num == 76:
        num = 1

    letter = ''
    for start in letters:
        if num >= start:
            letter = letters[start]

    return f'{letter}{num}'