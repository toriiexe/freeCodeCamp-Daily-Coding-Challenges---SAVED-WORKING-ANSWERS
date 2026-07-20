# Python solution for 2026-06-18
# Streaming Cost
def get_streaming_bill(cart, subscription):
    cost = {
        'rent': {
            'HD': 3.99,
            '4K': 5.99
        },
        'buy': {
            'HD': 12.99,
            '4K': 19.99
        }
    }

    discount = {
        'none': 1.0,
        'basic': 0.9,    # 10% off
        'premium': 0.75  # 25% off
    }

    total = 0

    for item in cart:
        total += cost[item['type']][item['format']]

    total *= discount[subscription]

    return f'${total:.2f}'