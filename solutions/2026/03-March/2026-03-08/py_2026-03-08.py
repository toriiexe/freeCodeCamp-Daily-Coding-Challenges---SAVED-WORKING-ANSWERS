# Python solution for 2026-03-08
# HSL Validator
import re
def is_valid_hsl(hsl):
    pattern = r"^hsl\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)\s*;?$"
    
    matched = re.fullmatch(pattern, hsl)
    if not matched:
        return False

    values = re.fullmatch(r"hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*;?", hsl)

    h, s, l = map(int, values.groups())

    return 0 <= h <= 360 and 0 <= s <= 100 and 0 <= l <= 100