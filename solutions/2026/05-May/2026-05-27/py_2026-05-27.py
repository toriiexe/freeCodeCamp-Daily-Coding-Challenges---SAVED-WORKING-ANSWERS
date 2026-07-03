# Python solution for 2026-05-27
# Pizza party
from math import ceil

def get_pizzas_to_order(hours_worked):
    slices = 0

    for hours in hours_worked:
        willGet = ceil(hours / 3)
        slices += max(willGet, 2)

    return ceil(slices / 8)