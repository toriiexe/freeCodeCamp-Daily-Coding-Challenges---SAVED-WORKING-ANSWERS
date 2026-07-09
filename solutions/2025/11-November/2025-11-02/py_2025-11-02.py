# Python solution for 2025-11-02
# Infected
import math
def infected(days):
    s = 1

    for day in range(1, days + 1):
        s *= 2
        if day % 3 == 0:
            s -= math.ceil(s * 0.2)

    return s