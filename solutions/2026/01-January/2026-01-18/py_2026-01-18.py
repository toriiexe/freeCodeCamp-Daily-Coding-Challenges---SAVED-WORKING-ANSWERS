# Python solution for 2026-01-18
# Free Shipping
def gets_free_shipping(cart, minimum):
    items = {
        'shirt': 34.25,
        'jeans': 48.50,
        'shoes': 75.00,
        'hat': 19.95,
        'socks': 15.00,
        'jacket': 109.95
    }

    total = sum([items[item] for item in cart])
    return total >= minimum