# Python solution for 2026-06-19
# Rental Cost
from datetime import datetime, timedelta
def get_rental_cost(rented, returned, tier):
    tiers = {
        1: [4.99, 3.99],
        3: [3.99, 2.99],
        7: [2.99, 0.99]
    }

    rented_date, rented_time = rented[:-1].split('T')

    rented_year, rented_mon, rented_day = map(int, rented_date.split('-'))
    rented_hour, rented_min, rented_sec = map(int, rented_time.split(':'))

    returned_date, returned_time = returned[:-1].split('T')

    returned_year, returned_mon, returned_day = map(int, returned_date.split('-'))
    returned_hour, returned_min, returned_sec = map(int, returned_time.split(':'))

    rented = datetime(rented_year, rented_mon, rented_day, rented_hour, rented_min, rented_sec)

    returned = datetime(returned_year, returned_mon, returned_day, returned_hour, returned_min, returned_sec)

    due = rented.replace(hour=12, minute=0, second=0) + timedelta(days=tier)

    late_days = 0
    if returned > due:
        diff = returned - due
        late_days = diff.days
        if diff.seconds:
            late_days += 1

    total_cost = tiers[tier][0] + tiers[tier][1] * late_days

    return f'${total_cost:.2f}'