# Python solution for 2026-07-29
# Contrast Rating 2
def get_contrast_rating(l1, l2, is_large_text):
    contrast = (l1 + 0.05) / (l2 + 0.05)

    if contrast >= (4.5 if is_large_text else 7.0):
        return 'AAA'
    if contrast >= (3.0 if is_large_text else 4.5):
        return 'AA'
    return 'Fail'

"""
# Contrast Rating 2
def get_contrast_rating(l1, l2, is_large_text):
    contrast = (l1 + 0.05) / (l2 + 0.05)

    if is_large_text:
        if contrast >= 4.5:
            return 'AAA'
        elif contrast >= 3.0:
            return 'AA'
    else:
        if contrast >= 7.0:
            return 'AAA'
        elif contrast >= 4.5:
            return 'AA'

    return 'Fail'
"""