# Python solution for 2026-02-01
# Digital Detox
from datetime import datetime

def digital_detox(logs):
    logs.sort()

    dates = {}

    for log in logs:
        date = log[:10]
        dates[date] = dates.get(date, 0) + 1

        if dates[date] > 2:
            return False

    times = [datetime.strptime(log, "%Y-%m-%d %H:%M:%S") for log in logs]

    for i in range(1, len(times)):
        if (times[i] - times[i - 1]).total_seconds() < 4 * 60 * 60:
            return False

    return True