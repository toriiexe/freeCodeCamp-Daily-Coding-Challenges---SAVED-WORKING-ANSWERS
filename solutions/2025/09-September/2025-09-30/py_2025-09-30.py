# Python solution for 2025-09-30
# Phone Number Formatter
def format_number(number):
    return f'+{number[0]} ({number[1:4]}) {number[4:7]}-{number[7:]}'