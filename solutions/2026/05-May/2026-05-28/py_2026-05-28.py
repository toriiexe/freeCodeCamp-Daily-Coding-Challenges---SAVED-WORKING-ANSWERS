# Python solution for 2026-05-28
#FizzBuzz Count
def fizz_buzz_count(start, end):
    d = {'fizz': 0, 'buzz': 0}

    for n in range(start, end+1):
        if n % 3 == 0 and n % 5 == 0:
            d['fizz'] += 1
            d['buzz'] += 1
        elif n % 3 == 0:
            d['fizz'] += 1
        elif n % 5 == 0:
            d['buzz'] += 1
            
    return d