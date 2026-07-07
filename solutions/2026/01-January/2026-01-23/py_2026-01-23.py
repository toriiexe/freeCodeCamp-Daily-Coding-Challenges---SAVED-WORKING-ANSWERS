# Python solution for 2026-01-23
# Hex Validator
import re
def is_valid_hex(s):
    return bool(re.fullmatch(r'^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$', s))