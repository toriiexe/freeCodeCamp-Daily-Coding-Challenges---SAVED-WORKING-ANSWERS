# Python solution for 2026-06-21
# Summer Solstice
def get_daytime_hours(latitude):
    s = '☀️'
    n = '🌑'

    daytime_hours = 12 + (latitude / 90) * 12
    daytime_hours = round(daytime_hours / 2) * 2

    nighttime_hours = 24 - daytime_hours
    half_of_nighttime_hours = nighttime_hours // 2

    return f'{half_of_nighttime_hours * n}{daytime_hours * s}{half_of_nighttime_hours * n}'