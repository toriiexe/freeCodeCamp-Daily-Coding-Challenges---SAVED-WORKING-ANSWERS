# Python solution for 2026-04-22
# Earth Day: Cleanup Crew
VALUES = {
    'bottle': 10,
    'can': 6,
    'bag': 8,
    'tire': 35,
    'straw': 4,
    'cardboard': 3,
    'newspaper': 3,
    'shoe': 12,
    'electronics': 25,
    'battery': 18,
    'mattress': 38,
}

def get_cleanup_score(items):
    total = 0
    streak = 0
    multiplier = 2

    for i, item in enumerate(items):
        if isinstance(item, list):
            score = item[1]
        else:
            if i > 0 and items[i - 1] == item:
                streak += 1
            else:
                streak = 0

            score = VALUES[item] + streak

        if (i + 1) % 5 == 0:
            score *= multiplier
            multiplier += 1

        total += score

    return total