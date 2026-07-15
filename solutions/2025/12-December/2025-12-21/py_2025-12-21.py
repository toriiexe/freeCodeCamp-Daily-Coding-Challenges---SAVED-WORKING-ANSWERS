# Python solution for 2025-12-21
# Daylight Hours
def daylight_hours(latitude):
    daylight = {
        -90: 24,
        -75: 23,
        -60: 21,
        -45: 15,
        -30: 13,
        -15: 12,
        0: 12,
        15: 11,
        30: 10,
        45: 9,
        60: 6,
        75: 2,
        90: 0
    }
    
    closest_latitude = min(daylight, key=lambda x: abs(x - latitude))
    return daylight[closest_latitude]