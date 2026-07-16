# Python solution for 2025-08-27
# Unorder of Operations
def evaluate(numbers, operators):
    op_count = len(operators)
    total = numbers[0]

    for i in range(1, len(numbers)):
        op = operators[(i - 1) % op_count]

        if op == '+':
            total += numbers[i]
        elif op == '-':
            total -= numbers[i]
        elif op == '*':
            total *= numbers[i]
        elif op == '/':
            total /= numbers[i]
        elif op == '%':
            total %= numbers[i]

    return total