# Python solution for 2026-07-17
# Birthday Countdown
from datetime import datetime

def is_valid_date(y, m, d):
    try:
        datetime(y, m, d)
        return True
    except ValueError:
        return False

def days_until_birthday(today, birthday):
    today_y, today_m, today_d = map(int, today.split('-'))
    birthday_m, birthday_d = map(int, birthday.split('/'))

    birthday_y = today_y
    i = 0

    while True:
        valid = is_valid_date(birthday_y + i, birthday_m, birthday_d)

        if valid:
            candidate = datetime(birthday_y + i, birthday_m, birthday_d)
            today_date = datetime(today_y, today_m, today_d)

            if candidate <= today_date:
                i += 1
                continue

            return (candidate - today_date).days

        i += 1