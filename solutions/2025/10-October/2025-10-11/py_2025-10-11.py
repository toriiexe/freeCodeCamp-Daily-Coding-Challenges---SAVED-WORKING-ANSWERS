# Python solution for 2025-10-11
# Hex to Decimal
def hex_to_decimal(h):
    total = 0

    mapping = {
        'A': 10, 'B': 11, 'C': 12,
        'D': 13, 'E': 14, 'F': 15
    }

    for i, digit in enumerate(reversed(h.upper())):
        value = mapping[digit] if digit in mapping else int(digit)
        total += value * 16 ** i

    return total

"""
# Hex to Decimal - SHORTER VERSION
# It's better to use 'h' as the parameter name because 'hex' is a built-in function in Python.
def hex_to_decimal(h):
    return int(h, 16)
"""