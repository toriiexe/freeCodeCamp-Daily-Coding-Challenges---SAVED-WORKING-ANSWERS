# Python solution for 2026-03-03
# Perfect Cube Count
def count_perfect_cubes(a, b):
    s, e = sorted((a, b))
    counter = 0

    for i in range(int(-abs(e)**(1/3))-1, int(abs(e)**(1/3))+2):
        if s <= i**3 <= e:
            counter += 1

    return counter