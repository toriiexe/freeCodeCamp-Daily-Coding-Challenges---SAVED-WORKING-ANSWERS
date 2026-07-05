# Python solution for 2026-05-31
# Parentheses Combinations
from math import factorial as fact
def get_combinations(n):
    return (fact(2*n)) / (fact(n+1) * fact(n))