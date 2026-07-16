# Python solution for 2025-08-25
#camelCase
import re
def to_camel_case(s):
    return re.sub(r'[\s_-]+(.)', lambda m: m.group(1).upper(), s.lower())


"""
#camelCase - ANOTHER VERSION
def to_camel_case(s):
    res = ''
    toUpper = False
    for c in s:
        if c in '-_ ':
            toUpper = True
        else:
            if toUpper:
                res += c.upper()
                toUpper = False
            else:
                res += c.lower()
    return res
"""