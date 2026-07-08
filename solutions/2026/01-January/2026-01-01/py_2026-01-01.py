# Python solution for 2026-01-01
# Resolution Streak
def resolution_streak(days):
    n = 0
    for day in days:
        if day[0] >= 10_000 and day[1] <= 120 and day[2] >= 5:
            n += 1
        else:
            return f'Resolution failed on day {n+1}: {n} day streak.'
    return f'Resolution on track: {n} day streak.'