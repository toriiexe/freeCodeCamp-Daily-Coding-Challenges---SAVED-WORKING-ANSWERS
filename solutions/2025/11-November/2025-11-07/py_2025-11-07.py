# Python solution for 2025-11-07
# Counting Cards
import math
def combinations(cards):
    return math.factorial(52) // (math.factorial(cards) * math.factorial(52-cards))