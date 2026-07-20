# Python solution for 2026-03-25
# Cooldown Time
from datetime import datetime
def can_retake(finish_time, current_time):
    f_date, f_clock = finish_time.split('T')

    f_year, f_month, f_day = map(int, f_date.split('-'))
    f_hour, f_min, f_sec = map(int, f_clock.split(':'))

    c_date, c_clock = current_time.split('T')

    c_year, c_month, c_day = map(int, c_date.split('-'))
    c_hour, c_min, c_sec = map(int, c_clock.split(':'))

    f = datetime(f_year, f_month, f_day, f_hour, f_min, f_sec)

    c = datetime(c_year, c_month, c_day, c_hour, c_min, c_sec)

    res = int((c - f).total_seconds() // 60)

    return res / 60 >= 48

"""
# Cooldown Time - ANOTHER SOLUTION
from datetime import datetime

def can_retake(finish_time, current_time):
    finish = datetime.fromisoformat(finish_time)
    current = datetime.fromisoformat(current_time)
    
    return (current - finish).total_seconds() >= 48 * 60 * 60
"""