# Python solution for 2025-10-06
# Space Week Day 3: Phone Home
def send_message(route):
    speed = 300_000

    distance = sum(route)
    travel_time = distance / speed
    delay = (len(route) - 1) * 0.5

    return round(travel_time + delay, 4)

"""
# Space Week Day 3: Phone Home - ANOTHER VERSION
def send_message(route):
    speed = 300_000
    res = 0

    for i in range(len(route)):
        res += route[i] / speed

        if i != len(route) - 1:
            res += 0.5

    return round(res, 4)
"""