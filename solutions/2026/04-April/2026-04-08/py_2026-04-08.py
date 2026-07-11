# Python solution for 2026-04-08
# FizzBuzz Validator
def is_fizz_buzz(arr):
    for i, el in enumerate(arr):
        if isinstance(el, int):
            start = el - i
            break
    else:
        return False

    for i, el in enumerate(arr):
        n = start + i

        if n % 15 == 0:
            if el != 'FizzBuzz':
                return False
        elif n % 3 == 0:
            if el != 'Fizz':
                return False
        elif n % 5 == 0:
            if el != 'Buzz':
                return False
        else:
            if el != n:
                return False

    return True