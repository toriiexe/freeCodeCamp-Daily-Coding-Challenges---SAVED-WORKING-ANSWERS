# Python solution for 2026-05-11
# Oldest Person
def get_oldest(people):
    if not people:
        return []

    max_age = max(person['age'] for person in people)

    return [person['name'] for person in people if person['age'] == max_age]