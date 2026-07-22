# Python solution for 2026-07-22
# Piggy Bank
def piggy_bank(coins):
    values = {
        'pennies': 1,
        'nickels': 5,
        'dimes': 10,
        'quarters': 25
    }

    total = 0

    for coin, amount in coins.items():
        total += values[coin] * amount

    return f'${total // 100}.{total % 100:02d}'