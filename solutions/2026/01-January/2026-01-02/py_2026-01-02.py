# Python solution for 2026-01-02
# Nth Fibonacci Number
def nth_fibonacci(n):
    a, b = 0, 1
    for i in range(n-1):
        a, b = b, a + b
    return a