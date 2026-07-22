# Python solution for 2025-12-12
# Inventory Update
def update_inventory(inventory, shipment):
    eq = {}

    for inv in inventory:
        eq[inv[1]] = inv[0]

    for s in shipment:
        if s[1] not in eq:
            eq[s[1]] = s[0]
        else:
            eq[s[1]] += s[0]

    res = []

    for key, value in eq.items():
        res.append([value, key])


    return res