# Python solution for 2025-10-30
# Nth Prime
def nth_prime(n):
    primes = []
    num = 2

    while len(primes) < n:
        is_prime = True
        for i in range(2, num):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            primes.append(num)
        num += 1

    return primes[-1]