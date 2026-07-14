# Python solution for 2026-03-18
# Largest Number
import re
def largest_number(s):
    with_spaces = re.sub('[,!?:;]', ' ', s)
    nums = map(float, with_spaces.split())
    return max(nums)