# Python solution for 2025-08-13
#Fibonacci Sequence
def fibonacci_sequence(start_sequence, length):
    if length == 0:
        return []

    x, y = start_sequence[0], start_sequence[1]
    arr = start_sequence[:length]

    for i in range(length - 2):
        x, y = y, y + x
        arr.append(y)

    return arr