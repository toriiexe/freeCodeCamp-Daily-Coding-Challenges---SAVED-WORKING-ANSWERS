# Python solution for 2026-05-15
# Coffee Order Parser
def format_coffee_order(order):
    menu = [
        ("cold brew", 4.50),
        ("oat latte", 5.00),
        ("cappuccino", 4.75),
        ("espresso", 3.00),
        ("vanilla syrup", 0.75),
        ("caramel drizzle", 0.60),
        ("extra shot", 0.50),
        ("oat milk", 0.75),
        ("cream", 0.75),
    ]

    order = order.lower()

    items = []
    total = 0

    for name, price in menu:
        if name in order:
            items.append(name)
            total += price

    return f"{' + '.join(items)}: ${total:.2f}"