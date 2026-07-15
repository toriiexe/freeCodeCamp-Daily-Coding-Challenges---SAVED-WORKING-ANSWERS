# Python solution for 2025-12-29
# Takeoff Fuel
import math
def fuel_to_add(current_gallons, required_liters):
    gallon = 3.78541
    current_liters = current_gallons * gallon
    diff = current_liters - required_liters
    if diff >= 0:
        return 0
    else:
        return math.ceil(abs(diff / gallon))