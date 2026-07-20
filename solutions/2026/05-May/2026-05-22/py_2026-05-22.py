# Python solution for 2026-05-22
# Meeting Time
def get_meeting_time(availability):
    res = []

    for person in availability:
        time = []
        for hours in person:
            time.extend(range(hours[0], hours[1]))
        res.append(time)

    common = set(res[0])

    for sublist in res[1:]:
        common &= set(sublist)

    return min(common) if common else 'None'