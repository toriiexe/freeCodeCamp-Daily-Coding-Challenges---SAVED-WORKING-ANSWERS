#camelCase
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