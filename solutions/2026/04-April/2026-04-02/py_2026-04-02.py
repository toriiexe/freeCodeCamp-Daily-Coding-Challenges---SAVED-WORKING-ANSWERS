# Python solution for 2026-04-02
# Capitalized Fibonacci
def capitalize_fibonacci(s):
    fib = [0, 1]
    a, b = 0, 1

    while b < len(s):
        a, b = b, a + b
        fib.append(b)

    result = ''

    for i, c in enumerate(s):
        if c.isalpha():
            result += c.upper() if i in fib else c.lower()
        else:
            result += c

    return result