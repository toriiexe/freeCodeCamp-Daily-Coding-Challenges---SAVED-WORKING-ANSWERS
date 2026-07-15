# Python solution for 2026-03-31
# Wake-Up Alarm
def alarm_check(alarm_time, wake_time):
    alarm_h, alarm_m = alarm_time.split(':')
    alarm_total = int(alarm_h) * 60 + int(alarm_m)

    wake_h, wake_m = wake_time.split(':')
    wake_total = int(wake_h) * 60 + int(wake_m)

    if wake_total < alarm_total:
        return 'early'
    elif wake_total <= alarm_total + 10:
        return 'on time'
    else:
        return 'late'