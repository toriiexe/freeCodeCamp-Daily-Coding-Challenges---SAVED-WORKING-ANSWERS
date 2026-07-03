# Python solution for 2025-08-23
#Unnatural Prime
def is_unnatural_prime(n):
    num = abs(n)

    if num <= 1:
        return False

    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False

    return True