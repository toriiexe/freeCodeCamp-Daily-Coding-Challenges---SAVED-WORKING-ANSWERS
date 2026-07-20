# Python solution for 2026-07-20
# Golden Ratio
def is_golden_ratio(a, b):
    golden_ratio = 1.618
    tolerance = 0.01

    ratio = max(a, b) / min(a, b)
    
    return ratio - tolerance <= golden_ratio <= ratio + tolerance