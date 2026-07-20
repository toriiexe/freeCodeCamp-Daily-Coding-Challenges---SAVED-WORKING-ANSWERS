# Python solution for 2026-04-16
# String Math
import re
def do_math(s):
    nums = list(map(int, re.findall(r'\d+', s)))
    seps = re.findall(r'\D+', s)

    if s and not s[0].isdigit():
        seps = seps[1:]
    if s and not s[-1].isdigit():
        seps = seps[:-1]

    total = nums[0] if nums else 0

    for i in range(1, len(nums)):
        if len(seps[i - 1]) % 2 == 0:
            total += nums[i]
        else:
            total -= nums[i]

    return total