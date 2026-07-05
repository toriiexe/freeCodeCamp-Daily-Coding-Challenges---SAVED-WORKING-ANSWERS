# Python solution for 2026-05-18
# Bingo Range
def get_bingo_range(letter):
    d = {'B': [1, 15], 'I': [16, 30], 
    'N': [31,45], 'G': [46,60], 'O': [61,75]}
    return [i for i in range(d[letter][0], d[letter][1]+1)]