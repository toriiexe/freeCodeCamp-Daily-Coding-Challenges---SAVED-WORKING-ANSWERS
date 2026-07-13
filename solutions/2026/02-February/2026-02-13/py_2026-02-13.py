# Python solution for 2026-02-13
# 2026 Winter Games Day 8: Luge
def get_fastest_speed(times):
    segments = [320, 280, 350, 300, 250]
    speeds = []

    for i in range(5):
        speeds.append(segments[i] / times[i])

    fastest = max(speeds)
    segment = speeds.index(fastest) + 1

    return f"The luger's fastest speed was {fastest:.2f} m/s on segment {segment}."