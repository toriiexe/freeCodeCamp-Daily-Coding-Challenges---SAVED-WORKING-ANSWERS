# Python solution for 2025-10-13
# 24 to 12
def to_12(time):
    h, m = int(time[:2]), int(time[2:])

    if h == 0:
        h = 12
        period = 'AM'
    elif h < 12:
        period = 'AM'
    elif h == 12:
        period = 'PM'
    else:
        h -= 12
        period = 'PM'

    return f'{h}:{m:02d} {period}'