# Python solution for 2026-05-17
# Mongo ID Date
from datetime import datetime, timezone

def mongo_id_to_date(s):
    timestamp = int(s[:8], 16)

    return datetime.fromtimestamp(timestamp, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")


"""
# Mongo ID Date - WITHOUT ANY LIBRARIES VERSION
def mongo_id_to_date(s):
    seconds = int(s[:8], 16)

    year = 1970

    while True:
        leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
        days_in_year = 366 if leap else 365

        if seconds >= days_in_year * 24 * 60 * 60:
            seconds -= days_in_year * 24 * 60 * 60
            year += 1
        else:
            break

    months = [31,28,31,30,31,30,31,31,30,31,30,31]

    if leap:
        months[1] = 29

    month = 1
    i = 0

    while seconds >= months[i] * 24 * 60 * 60:
        seconds -= months[i] * 24 * 60 * 60
        month += 1
        i += 1

    day = seconds // (24 * 60 * 60) + 1
    seconds %= 24 * 60 * 60

    hour = seconds // 3600
    seconds %= 3600

    minute = seconds // 60
    second = seconds % 60

    return f"{year:04d}-{month:02d}-{day:02d}T{hour:02d}:{minute:02d}:{second:02d}.000Z"
"""