# Python solution for 2026-05-05
#Narcissistic Number
def is_narcissistic(n):
    nStr = str(n)
    length = len(nStr)
    s = 0
    for i in range(length):
        num = int(nStr[i])
        s += num ** length
    return s == n