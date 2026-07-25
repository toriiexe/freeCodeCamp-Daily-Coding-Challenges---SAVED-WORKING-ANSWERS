# Python solution for 2026-07-23
# Game Theory
def play_game(p1, p2):
    s1 = s2 = 0
    for one, two in zip(p1, p2):
        if one == 'C' and two == 'C':
            s1 += 3
            s2 += 3
        elif one == 'D' and two == 'D':
            s1 += 1
            s2 += 1
        else:
            if one == 'D':
                s1 += 5
            else:
                s2 += 5

    return [s1, s2]


"""
# Game Theory - ANOTHER SOLUTION
def play_game(p1, p2):
    scores = {
        ('C', 'C'): (3, 3),
        ('D', 'D'): (1, 1),
        ('C', 'D'): (0, 5),
        ('D', 'C'): (5, 0)
    }

    s1 = s2 = 0
    for pair in zip(p1, p2):
        a, b = scores[pair]
        s1 += a
        s2 += b

    return [s1, s2]
"""