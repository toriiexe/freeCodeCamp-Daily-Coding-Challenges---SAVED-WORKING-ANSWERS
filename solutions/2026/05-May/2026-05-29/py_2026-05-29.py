# Python solution for 2026-05-29
# Wider Aspect Ratio
import math

def get_wider_aspect_ratio(a, b):
    wA, hA = map(int, a.split('x'))
    wB, hB = map(int, b.split('x'))

    if wA * hB >= wB * hA:
        g = math.gcd(wA, hA)
        return f"{wA // g}:{hA // g}"
    else:
        g = math.gcd(wB, hB)
        return f"{wB // g}:{hB // g}"