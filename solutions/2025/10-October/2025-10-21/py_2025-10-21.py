# Python solution for 2025-10-21
# Thermostat Adjuster 2
def adjust_thermostat(current_f, target_c):
    target_f = (target_c * 1.8) + 32

    if current_f < target_f:
        return f'Heat: {(target_f - current_f):.1f} degrees Fahrenheit'
    elif current_f > target_f:
        return f'Cool: {(current_f - target_f):.1f} degrees Fahrenheit'

    return 'Hold'