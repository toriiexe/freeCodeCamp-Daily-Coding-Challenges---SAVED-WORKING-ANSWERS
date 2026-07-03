# Python solution for 2025-08-18
#Factorializer
def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)