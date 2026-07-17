# Python solution for 2025-11-21
# LCM
def gcd(x, y):
    while y:
        x, y = y, x % y
    return x


def lcm(a, b):
    return (a * b) / gcd(a, b)