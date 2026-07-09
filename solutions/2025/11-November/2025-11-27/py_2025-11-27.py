# Python solution for 2025-11-27
# What's my age again?
def calculate_age(birthday):
    yt, mt, dt = 2025, 11, 27
    y, m, d = map(int, birthday.split('-'))

    age = yt - y

    if (m, d) > (mt, dt):
        age -= 1

    return age