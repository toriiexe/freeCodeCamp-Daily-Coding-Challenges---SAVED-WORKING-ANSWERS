# Python solution for 2026-02-24
# Business Day Count
from datetime import datetime, timedelta

def count_business_days(start, end):
    counter = 0

    d1 = datetime.strptime(start, "%Y-%m-%d").date()
    d2 = datetime.strptime(end, "%Y-%m-%d").date()

    diff = (d2 - d1).days

    for i in range(diff + 1):
        day = d1 + timedelta(days=i)
        if day.weekday() < 5:
            counter += 1

    return counter