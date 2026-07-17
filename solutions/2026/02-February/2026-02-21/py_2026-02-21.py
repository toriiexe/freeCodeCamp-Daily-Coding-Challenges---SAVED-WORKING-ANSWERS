# Python solution for 2026-02-21
# 2026 Winter Games Day 16: Curling
def score_curling(house):
    rings = [0, 0, 0]
    yings = [0, 0, 0]

    for r in range(5):
        for c in range(5):
            if house[r][c] == '.':
                continue

            if (r, c) == (2, 2):
                ring = 0
            elif abs(r - 2) <= 1 and abs(c - 2) <= 1:
                ring = 1
            else:
                ring = 2

            if house[r][c] == 'R':
                rings[ring] += 1
            else:
                yings[ring] += 1

    red_closest = next((i for i, x in enumerate(rings) if x), None)
    yellow_closest = next((i for i, x in enumerate(yings) if x), None)

    if red_closest is None and yellow_closest is None:
        return 'No points awarded'
    if red_closest is None:
        return f'Y: {sum(yings[:red_closest])}'
    if yellow_closest is None:
        return f'R: {sum(rings[:yellow_closest])}'

    if red_closest < yellow_closest:
        return f'R: {sum(rings[:yellow_closest])}'
    if yellow_closest < red_closest:
        return f'Y: {sum(yings[:red_closest])}'

    return 'No points awarded'