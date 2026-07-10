# Python solution for 2025-09-18
# Fill The Tank
def cost_to_fill(tank_size, fuel_level, price_per_gallon):
    return f'${(tank_size - fuel_level) * price_per_gallon:.02f}'