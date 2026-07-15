# Python solution for 2026-01-09
# Circular Prime
def is_num_prime(num):
    if num < 2:
        return False
    if num in (2, 3, 5):
        return True
    if num % 2 == 0 or num % 3 == 0 or num % 5 == 0:
        return False
    for i in range(7, int(num**0.5) + 1, 10):
        if num % i == 0 or num % (i + 2) == 0 or num % (i + 4) == 0 or num % (i + 6) == 0:
            return False
    return True

def is_circular_prime(n):
    n_str = str(n)
    for i in range(len(n_str)):
        if not is_num_prime(int(n_str[i:] + n_str[:i])):
            return False
    return True