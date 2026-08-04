# Python solution for 2026-08-04
# Golf Handicap Calculator
from decimal import Decimal, ROUND_HALF_UP

def calculate_handicap(scores, pars):
    avg = sum(s - p for s, p in zip(scores, pars)) / len(scores)
    return float(Decimal(str(avg)).quantize(Decimal('0.1'), rounding=ROUND_HALF_UP))
