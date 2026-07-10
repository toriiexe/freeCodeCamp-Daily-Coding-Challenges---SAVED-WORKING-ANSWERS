# Python solution for 2025-09-12
# Screen Time
def too_much_screen_time(hours):
    for hour in hours:
        if hour >= 10:
            return True

    for i in range(len(hours) - 2):
        if (hours[i] + hours[i+1] + hours[i+2]) / 3 >= 8:
            return True

    if sum(hours) / len(hours) >= 6:
        return True

    return False