# Python solution for 2026-07-27
# Pronic Number
def is_pronic(n):
    i = 0

    while i * (i+1) <= n:
        if i * (i+1) == n:
            return True
        i += 1

    return False