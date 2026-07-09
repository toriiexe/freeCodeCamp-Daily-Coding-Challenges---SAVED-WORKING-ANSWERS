# Python solution for 2025-10-01
# Binary to Decimal
def to_decimal(binary):
    s = 0
    for i, b in enumerate(binary[::-1]):
        s += int(b) * 2**i
    return s


"""
# Binary to Decimal - SHORTER VERSION
def to_decimal(binary):
    return int(binary, 2)
"""