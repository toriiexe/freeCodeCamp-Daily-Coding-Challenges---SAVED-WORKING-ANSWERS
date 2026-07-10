# Python solution for 2025-09-01
# Tribonacci Sequence
def tribonacci_sequence(start_sequence, length):
    res = start_sequence[:length]
    for i in range(length - 3): 
        res.append(sum(res[-3:]))
    return res