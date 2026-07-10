# Python solution for 2025-09-15
# Thermostat Adjuster
def adjust_thermostat(temp, target):
    return 'heat' if temp < target else 'cool' if temp > target else 'hold'