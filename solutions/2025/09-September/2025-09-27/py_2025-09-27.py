# Python solution for 2025-09-27
# Spam Detector
def is_spam(number):
    n = number.split(' ')
    a, bbb, ccc, dddd = n[0][1:], n[1][1:4], n[2][:3], n[2][4:]

    if len(a) > 2 or not a.startswith('0'):
        return True

    b = int(bbb)
    if b < 200 or b > 900:
        return True

    c = sum(int(x) for x in ccc)
    if str(c) in dddd:
        return True

    nums = a + bbb + ccc + dddd
    for i in range(len(nums) - 3):
        if len(set(nums[i:i+4])) == 1:
            return True
    
    return False