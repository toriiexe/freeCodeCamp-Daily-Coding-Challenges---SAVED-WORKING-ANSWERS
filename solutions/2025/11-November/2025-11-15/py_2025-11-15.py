# Python solution for 2025-11-15
# GCD
def gcd(x, y):
    while y:
        x, y = y, x % y
    return x