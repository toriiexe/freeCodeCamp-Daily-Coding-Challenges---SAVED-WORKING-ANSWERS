# Python solution for 2026-01-31
# Zodiac Finder
from datetime import datetime
def get_sign(date_str):
    dt = datetime.strptime(date_str, "%Y-%m-%d")
    month, day = dt.month, dt.day
    zodiac = {
        1: ("Capricorn", "Aquarius", 20),
        2: ("Aquarius", "Pisces", 19),
        3: ("Pisces", "Aries", 21),
        4: ("Aries", "Taurus", 20),
        5: ("Taurus", "Gemini", 21),
        6: ("Gemini", "Cancer", 21),
        7: ("Cancer", "Leo", 23),
        8: ("Leo", "Virgo", 23),
        9: ("Virgo", "Libra", 23),
        10: ("Libra", "Scorpio", 23),
        11: ("Scorpio", "Sagittarius", 22),
        12: ("Sagittarius", "Capricorn", 22)
    }
    res = zodiac.get(month)
    return res[day >= res[2]]