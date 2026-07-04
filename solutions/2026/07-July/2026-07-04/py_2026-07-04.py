# Python solution for 2026-07-04
# Kaprekar's Routine
def kaprekar(n):
    counter = 0

    while n != 6174:
        s = str(n).zfill(4)
        dsc = int("".join(sorted(s)))
        asc = int("".join(sorted(s, reverse=True)))
        n = asc - dsc
        counter += 1

    return counter