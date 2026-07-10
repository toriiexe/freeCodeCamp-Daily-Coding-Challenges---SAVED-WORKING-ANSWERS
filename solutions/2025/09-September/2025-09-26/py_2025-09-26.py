# Python solution for 2025-09-26
# Caught Speeding
def speeding(speeds, limit):
    speeding_amount = 0
    beyond_speed_limit_total = 0

    for speed in speeds:
        if speed > limit:
            speeding_amount += 1
            beyond_speed_limit_total += speed - limit

    if speeding_amount == 0:
        return [0, 0]

    return [speeding_amount, beyond_speed_limit_total / speeding_amount]