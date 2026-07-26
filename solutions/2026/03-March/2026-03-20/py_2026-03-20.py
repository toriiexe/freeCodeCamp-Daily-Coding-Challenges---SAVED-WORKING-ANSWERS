# Python solution for 2026-03-20
# Equinox Shadows
def get_shadow(time):
    h, m = map(int, time.split(':'))
    t = h + 0.5 if m == 30 else h

    if t < 6 or t >= 18 or t == 12:
        return 'No shadow'

    shadow = (12 - t) ** 3

    if shadow > 0:
        return f'{shadow}ft west'
    else:
        return f'{abs(shadow)}ft east'