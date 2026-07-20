# Python solution for 2026-01-03
# Left-Handed Seat at the Table
def find_left_handed_seats(table):
    total = 0

    for r in range(2):
        if r == 0:
            for p in range(4):
                if table[r][p] == 'U':
                    if p == 3:
                        total += 1
                    elif table[r][p+1] != 'R':
                        total += 1
        else:   
            for p in range(4):
                if table[r][p] == 'U':
                    if p == 0:
                        total += 1
                    elif table[r][p-1] != 'R':
                        total += 1

    return total