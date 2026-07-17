# Python solution for 2025-10-10
# Space Week Day 7: Launch Fuel
def launch_fuel(payload):
    weight = payload
    previous_fuel = 0
    total_fuel = weight / 5
    additional = total_fuel

    while additional >= 1:
        weight += additional
        previous_fuel = total_fuel
        total_fuel = weight / 5
        additional = total_fuel - previous_fuel

    return round(total_fuel, 1)

"""
# Space Week Day 7: Launch Fuel - ANOTHER VERSION
def launch_fuel(payload):
    fuel = payload / 5
    additional = fuel / 5

    while additional >= 1:
        fuel += additional
        additional /= 5

    fuel += additional

    return round(fuel, 1)
"""