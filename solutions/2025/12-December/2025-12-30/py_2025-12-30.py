# Python solution for 2025-12-30
# Sum the String
def string_sum(s):
    res = 0
    temp = ""

    for c in s:
        if c.isdigit():
            temp += c
        elif temp:
            res += int(temp)
            temp = ""

    if temp:
        res += int(temp)

    return res