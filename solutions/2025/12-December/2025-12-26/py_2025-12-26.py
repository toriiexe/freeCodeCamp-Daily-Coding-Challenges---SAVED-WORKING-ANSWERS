# Python solution for 2025-12-26
# Sum of Divisors
def sum_divisors(n):
    total = 0
    for i in range(1, n+1):
        if n % i == 0:
            total += i
    return total