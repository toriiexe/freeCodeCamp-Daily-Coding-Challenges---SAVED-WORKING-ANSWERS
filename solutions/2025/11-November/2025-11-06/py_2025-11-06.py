# Python solution for 2025-11-06
# Weekday Finder
import datetime
def get_weekday(date_string):
    year, month, day = map(int, date_string.split('-'))
    date_ymd = datetime.datetime(year, month, day)
    return date_ymd.strftime('%A')