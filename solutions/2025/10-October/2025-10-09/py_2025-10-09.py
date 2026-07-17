# Python solution for 2025-10-09
# Space Week Day 6: Moon Phase
from datetime import date

def moon_phase(date_string):
    reference = date(2000, 1, 6)

    year, month, day = map(int, date_string.split('-'))
    target = date(year, month, day)

    diff = (target - reference).days
    cycle_day = (diff % 28) + 1

    if cycle_day <= 7:
        return 'New'
    elif cycle_day <= 14:
        return 'Waxing'
    elif cycle_day <= 21:
        return 'Full'
    else:
        return 'Waning'