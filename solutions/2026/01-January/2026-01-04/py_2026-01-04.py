# Python solution for 2026-01-04
# Leap Year Calculator
def is_leap_year(year):
    return (year % 4 == 0 and year % 100 != 0) or year % 400 == 0