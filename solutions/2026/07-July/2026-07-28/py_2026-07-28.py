# Python solution for 2026-07-28
# Contrast Rating 1
def get_contrast_rating(ratio, is_large_text):
    ratio_to_num = float(ratio)
    if ratio_to_num >= (4.5 if is_large_text else 7.0):
        return 'AAA'
    if ratio_to_num >= (3.0 if is_large_text else 4.5):
        return 'AA'
    return 'Fail'

"""
# Contrast Rating 1 - ANOTHER SOLUTION
def get_contrast_rating(ratio, is_large_text):
    ratio_to_num = float(ratio)
    if is_large_text:
        if ratio_to_num >= 4.5:
            return 'AAA'
        elif ratio_to_num >= 3.0:
            return 'AA'
    else:
        if ratio_to_num >= 7.0:
            return 'AAA'
        elif ratio_to_num >= 4.5:
            return 'AA'
    return 'Fail'
"""