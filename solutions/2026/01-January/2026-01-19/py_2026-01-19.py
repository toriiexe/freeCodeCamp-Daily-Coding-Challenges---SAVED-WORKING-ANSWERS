# Python solution for 2026-01-19
# Energy Consumption
def compare_energy(calories_burned, watt_hours_used):
    cals_to_joules = calories_burned * 4184
    watt_to_joules = watt_hours_used * 3600
    
    if cals_to_joules > watt_to_joules:
        return 'Workout'
    elif cals_to_joules == watt_to_joules:
        return 'Equal'
    else:
        return 'Devices'