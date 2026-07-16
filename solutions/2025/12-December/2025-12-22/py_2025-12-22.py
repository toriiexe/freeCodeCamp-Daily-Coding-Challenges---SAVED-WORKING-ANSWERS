# Python solution for 2025-12-22
# Traveling Shopper
def buy_items(funds, items):
    rates = {
        'USD': 1.00,
        'EUR': 1.10,
        'GBP': 1.25,
        'JPY': 0.0070,
        'CAD': 0.75
    }

    budget = float(funds[0]) * rates[funds[1]]

    for i, (price, currency) in enumerate(items):
        budget -= float(price) * rates[currency]
        if budget < 0:
            return f'Buy the first {i} items.'

    return 'Buy them all!'