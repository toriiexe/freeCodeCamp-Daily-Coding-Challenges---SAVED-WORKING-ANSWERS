# Python solution for 2025-11-14
# Is It the Weekend?
import datetime
def days_until_weekend(date_string):
    year, month, day = map(int, date_string.split('-'))
    weekday = int(datetime.datetime(year, month, day).strftime("%w"))

    if weekday == 0 or weekday == 6:
        return "It's the weekend!"

    days = 6 - weekday if weekday != 0 else 0
    day_str = 'day' if days == 1 else 'days'
    
    return f"{days} {day_str} until the weekend."