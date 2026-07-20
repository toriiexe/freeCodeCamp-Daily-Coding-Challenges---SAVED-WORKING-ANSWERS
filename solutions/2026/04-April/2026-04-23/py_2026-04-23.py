# Python solution for 2026-04-23
# Closest Time Direction
def get_direction(time1, time2):
    t1_h, t1_m = map(int, time1.split(':'))
    t1 = int(t1_h) * 60 + int(t1_m)

    t2_h, t2_m = map(int, time2.split(':'))
    t2 = int(t2_h) * 60 + int(t2_m)

    diff1 = (t2 - t1) % (24 * 60)
    diff2 = (t1 - t2) % (24 * 60)

    if diff1 < diff2:
        return 'forward'
    elif diff1 > diff2:
        return 'backward'
    else:
        return 'equal'