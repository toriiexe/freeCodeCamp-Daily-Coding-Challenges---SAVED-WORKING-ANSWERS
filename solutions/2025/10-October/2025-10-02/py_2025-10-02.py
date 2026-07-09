# Python solution for 2025-10-02
# Decimal to Binary
def to_binary(decimal):
    res = ''
    while decimal >= 1:
        res += str(decimal % 2)
        decimal //= 2
    return res[::-1]

"""
# Decimal to Binary - SHORTER VERSION
def to_binary(decimal):
    return bin(decimal)[2:]
"""