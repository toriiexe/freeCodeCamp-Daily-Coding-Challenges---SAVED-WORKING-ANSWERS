# Python solution for 2026-03-13
# Parking Fee Calculator
from datetime import datetime
import math

def calculate_parking_fee(park_time, pickup_time):
    time_format = '%H:%M'
    t_start = datetime.strptime(park_time, time_format)
    t_end = datetime.strptime(pickup_time, time_format)

    diff = t_end - t_start
    total_hours = diff.total_seconds() / 3600

    total_cost = 0

    if t_end < t_start:
        total_cost += 10
        total_hours += 24

    total_hours = math.ceil(total_hours)
    total_cost += 3 * total_hours

    return f'${total_cost}' if total_cost >= 5 else '$5'