# Python solution for 2026-04-06
# What Day Is It?
import datetime
def get_day_of_week(timestamp):
    my_datetime = datetime.datetime.fromtimestamp(timestamp / 1000)
    return my_datetime.strftime('%A')
