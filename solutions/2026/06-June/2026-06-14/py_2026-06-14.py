# Python solution for 2026-06-14
# Credit Card Validator
def is_valid_card(number):
    num = number[::-1]
    s = 0

    for i in range(len(num)):
        digit = int(num[i])

        if i % 2 == 1:
            digit *= 2
            if digit > 9:
                digit -= 9

        s += digit

    return s % 10 == 0