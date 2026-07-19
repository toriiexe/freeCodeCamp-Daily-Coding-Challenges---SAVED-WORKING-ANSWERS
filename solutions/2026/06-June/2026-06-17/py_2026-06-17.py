# Python solution for 2026-06-17
# Spellcaster
def cast(spells):
    categories = {
        'f': 'Destruction',
        'l': 'Destruction',
        'i': 'Control',
        'w': 'Control',
        'h': 'Restoration',
        's': 'Restoration'
    }

    scores = {
        'f': 3,
        'l': 3,
        'i': 2,
        'w': 2,
        'h': 1,
        's': 1
    }

    total = 0
    multiplier = 1
    last_category = ''
    for i, spell in enumerate(spells):
        score = 0
        if i > 0 and categories[spell] != last_category:
            multiplier += 1
        else:
            multiplier = 1
        score += scores[spell] * multiplier
        last_category = categories[spell]
        total += score

    return total
