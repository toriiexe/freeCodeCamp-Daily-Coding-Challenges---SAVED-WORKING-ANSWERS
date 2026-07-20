# Python solution for 2026-04-05
# Digit Rotation Escape
def get_rotation(n):
    s = str(n)
    length = len(s)
    step = -1

    for i in range(length):
        step += 1
        rot = int(s[i:] + s[:i])
        if rot % length == 0:
            return step
        
    return 'none'