# Python solution for 2026-06-20
# Prime Factorization
def prime_factorization(n):
    factors = []
    i = 2

    while i * i <= n:
        while n % i == 0:
            factors.append(i)
            n //= i
        i += 1

    if n > 1:
        factors.append(n)

    return factors