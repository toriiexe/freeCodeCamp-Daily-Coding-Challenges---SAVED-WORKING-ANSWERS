# Python solution for 2026-08-06
# spoken Time
def get_spoken_time(hour_angle, minute_angle):
    m = minute_angle // 6 % 60
    h = int(hour_angle // 30 % 12)
    if h == 0:
        h = 12

    next_h = 1 if h == 12 else h + 1

    if m == 0:
        return f"{h} o'clock"
    elif m == 15:
        return f"quarter past {h}"
    elif m < 30:
        minute = "minute" if m == 1 else "minutes"
        return f"{m} {minute} past {h}"
    elif m == 30:
        return f"half past {h}"
    elif m == 45:
        return f"quarter to {next_h}"
    else:
        x = 60 - m
        minute = "minute" if x == 1 else "minutes"
        return f"{x} {minute} to {next_h}"