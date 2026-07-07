# Python solution for 2025-12-15
# Speed Check
def speed_check(speed_mph, speed_limit_kph):
    toKph = 1.60934 * speed_mph
    return 'Not Speeding' if toKph <= speed_limit_kph else 'Warning' if toKph <= speed_limit_kph + 5 else 'Ticket'