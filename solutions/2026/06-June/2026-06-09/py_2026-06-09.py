# Python solution for 2026-06-09
# Roommates
def get_roommates(people):
    groups = {}

    for person in people:
        group = person['group']

        if group not in groups:
            groups[group] = []

        groups[group].append(person['name'])

    res = []

    for names in groups.values():
        for i in range(0, len(names), 2):
            if i + 1 < len(names):
                res.append(f'{names[i]} and {names[i + 1]}')
            else:
                res.append(names[i])

    return res