# Python solution for 2026-04-04
# Equation Validation
def calc(a, b, op):
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    elif op == '/':
        return a / b

def is_valid_equation(equation):
    el = equation.split()

    if len(el) == 5:
        return calc(int(el[0]), int(el[2]), el[1]) == int(el[-1])

    if len(el) == 7:
        if el[3] in '*/':
            left = calc(int(el[2]), int(el[4]), el[3])
            return calc(int(el[0]), left, el[1]) == int(el[-1])

        elif el[1] in '*/':
            left = calc(int(el[0]), int(el[2]), el[1])
            return calc(left, int(el[4]), el[3]) == int(el[-1])

        else:
            left = calc(int(el[0]), int(el[2]), el[1])
            return calc(left, int(el[4]), el[3]) == int(el[-1])

    return False


"""
# Equation Validation - ANOTHER SOLUTION (NOT RECOMMENDED)
def is_valid_equation(equation):
    left, right = equation.split(' = ')
    return eval(left) == int(right)
"""