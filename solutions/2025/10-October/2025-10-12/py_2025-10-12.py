# Python solution for 2025-10-12
# Battle of Words
def battle(our_team, opponent):
    us = []
    them = []

    for word in our_team.split():
        total = 0
        for c in word:
            if c.islower():
                total += ord(c) - ord('a') + 1
            else:
                total += (ord(c) - ord('A') + 1) * 2
        us.append(total)

    for word in opponent.split():
        total = 0
        for c in word:
            if c.islower():
                total += ord(c) - ord('a') + 1
            else:
                total += (ord(c) - ord('A') + 1) * 2
        them.append(total)

    won = 0
    lost = 0

    for i in range(len(us)):
        if us[i] > them[i]:
            won += 1
        elif us[i] < them[i]:
            lost += 1

    if won > lost:
        return 'We win'
    elif won < lost:
        return 'We lose'
    else:
        return 'Draw'