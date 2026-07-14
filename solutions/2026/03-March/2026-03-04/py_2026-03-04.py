# Python solution for 2026-03-04
# Playing Card Values
def card_values(cards):
    letters_to_values = {
        'A': 1,
        'J': 10,
        'Q': 10,
        'K': 10
    }

    res = []

    for card in cards:
        value = card[:-1]
        if value.isdigit():
            res.append(int(value))
        else:
            res.append(letters_to_values.get(value, 0))

    return res