# Python solution for 2026-07-12
# Horoscope Match
def horoscope_match(sign1, sign2):
    signs = [
        'Aries', 'Taurus', 'Gemini',
        'Cancer', 'Leo', 'Virgo',
        'Libra', 'Scorpio','Sagittarius',
        'Capricorn', 'Aquarius', 'Pisces'
        ]

    compatibility = {
        0: 100,
        1: 40,
        2: 80,
        3: 30,
        4: 90,
        5: 20,
        6: 50
    }

    indx1 = signs.index(sign1)
    indx2 = signs.index(sign2)

    distance = abs(indx1 - indx2)
    return f'{compatibility[min(distance, 12-distance)]}%'