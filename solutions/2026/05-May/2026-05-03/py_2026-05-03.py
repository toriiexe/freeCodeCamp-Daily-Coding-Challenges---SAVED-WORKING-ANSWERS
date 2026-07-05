# Python solution for 2026-05-03
#Good Day
def get_greeting(s):
    h, m = s.split(':')
    time = 60 * int(h) + int(m)

    if 5 * 60 <= time <= 11 * 60 + 59:
        return 'Good morning'
    elif 12 * 60 <= time <= 17 * 60 + 59:
        return 'Good afternoon'
    elif 18 * 60 <= time <= 21 * 60 + 59:
        return 'Good evening'
    elif 22 * 60 <= time <= 23 * 60 + 59 or 0 <= time <= 4 * 60 + 59:
        return 'Good night'
    

"""
# Good Day - SHORTER VERSION
def get_greeting(s):
    h, m = map(int, s.split(':'))
    t = h * 60 + m

    # 5:00-11:59 morning, 12:00-17:59 afternoon,
    # 18:00-21:59 evening, 22:00-4:59 night
    return 'Good morning' if 5 * 60 <= t < 12 * 60 else 'Good afternoon' if 12 * 60 <= t < 18 * 60 else 'Good evening' if 18 * 60 <= t < 22 * 60 else 'Good night'
"""    