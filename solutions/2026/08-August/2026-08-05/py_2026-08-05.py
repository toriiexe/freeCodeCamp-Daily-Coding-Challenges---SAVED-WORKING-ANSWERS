# Python solution for 2026-08-05
# Spoken Duration
def get_spoken_duration(seconds):
    h = seconds // 3600
    m = seconds // 60 % 60
    s = seconds % 60

    res = []

    if h != 0:
        hours_str = f'{h} hour' if h == 1 else f'{h} hours'
        res.append(hours_str)

    if m != 0:
        mins_str = f'{m} minute' if m == 1 else f'{m} minutes'
        res.append(mins_str)

    if s != 0:
        secs_str = f'{s} second' if s == 1 else f'{s} seconds'
        res.append(secs_str)

    if len(res) == 1:
        return res[0]
    elif len(res) == 2:
        return f'{res[0]} and {res[1]}'
    else:
        return f'{res[0]}, {res[1]} and {res[2]}'