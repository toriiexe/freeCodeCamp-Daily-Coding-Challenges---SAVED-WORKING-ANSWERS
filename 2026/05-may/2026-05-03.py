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
    