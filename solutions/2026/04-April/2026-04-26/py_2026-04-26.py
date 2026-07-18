# Python solution for 2026-04-26
# FizzBuzz Explosion
def explode_fizzbuzz(target_z_count):
    res = 'fizzbuzz'
    temp = ''
    steps = 0

    while res.count('z') < target_z_count:
        for i, c in enumerate(res, start=1):
            if i % 15 == 0:
                temp += 'fizzbuzz'
            elif i % 3 == 0:
                temp += 'fizz'
            elif i % 5 == 0:
                temp += 'buzz'
            else:
                temp += c

        res = temp
        temp = ''
        steps += 1

    return steps