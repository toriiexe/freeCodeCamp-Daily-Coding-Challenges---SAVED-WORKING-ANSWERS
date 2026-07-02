#Mile Pace
def mile_pace(miles, duration):
    m, s = duration.split(':')
    t = int(m) * 60 + int(s)

    av = round(t / miles)

    mm = av // 60
    ss = av % 60

    return f"{mm:02}:{ss:02}"