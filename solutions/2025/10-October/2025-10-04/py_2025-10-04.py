# Python solution for 2025-10-04
# Stellar Classification
def classification(temp):
    if temp >= 30_000:
        return 'O'
    elif temp >= 10_000:
        return 'B'
    elif temp >= 7_500:
        return 'A'
    elif temp >= 6_000:
        return 'F'
    elif temp >= 5_200:
        return 'G'
    elif temp >= 3_700:
        return 'K'
    elif temp >= 0:
        return 'M'