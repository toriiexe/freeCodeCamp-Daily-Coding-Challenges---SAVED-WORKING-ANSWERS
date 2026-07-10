# Python solution for 2025-10-24
# Hidden Treasure
def dive(map, coordinates):
    row, col = coordinates
    
    if map[row][col] == '-':
        return 'Empty'
    
    o_counter = 0
    for r in range(len(map)):
        for c in range(len(map[r])):
            if map[r][c] == 'O':
                o_counter += 1
    
    if map[row][col] == 'O':
        if o_counter == 1:
            return 'Recovered'
        else:
            return 'Found'
    
    return 'Found'