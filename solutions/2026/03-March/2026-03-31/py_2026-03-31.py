# Python solution for 2026-03-31
# Wake-Up Alarm
def alarm_check(alarm_time, wake_time):
    alarm_h, alarm_m = map(int, alarm_time.split(':'))
    alarm_total = alarm_h * 60 + alarm_m

    wake_h, wake_m = map(int, wake_time.split(':'))
    wake_total = wake_h * 60 + wake_m

    if wake_total < alarm_total:
        return 'early'
    elif wake_total <= alarm_total + 10:
        return 'on time'
    else:
        return 'late'