# Python solution for 2026-03-26
# Movie Night
def get_movie_night_cost(day, showtime, number_of_tickets):
    prices = {
        'Monday': 10,
        'Tuesday': 5,
        'Wednesday': 10,
        'Thursday': 10,
        'Friday': 12,
        'Saturday': 12,
        'Sunday': 12,
    }

    price = prices[day]

    if day != 'Tuesday':
        time, period = showtime[:-2], showtime[-2:]
        hour, minute = map(int, time.split(':'))

        if period == 'pm' and hour != 12:
            hour += 12
        elif period == 'am' and hour == 12:
            hour = 0

        minutes = hour * 60 + minute

        if minutes < 17 * 60:
            price -= 2

    total = price * number_of_tickets
    return f'${total:.2f}'