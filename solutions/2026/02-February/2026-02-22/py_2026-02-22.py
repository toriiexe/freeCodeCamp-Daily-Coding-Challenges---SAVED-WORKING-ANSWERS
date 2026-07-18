# Python solution for 2026-02-22
# 2026 Winter Games Day 17: Closing Day
def count_medals(winners):
    countries = set()

    for row in winners:
        for country in row:
            countries.add(country)

    medals = {country: [0, 0, 0] for country in countries}

    for row in winners:
        for i, country in enumerate(row):
            medals[country][i] += 1

    sorted_countries = sorted(countries, key=lambda c: (-medals[c][0], c))

    res = 'Country,Gold,Silver,Bronze,Total'

    for country in sorted_countries:
        gold, silver, bronze = medals[country]
        total = gold + silver + bronze
        res += f'\n{country},{gold},{silver},{bronze},{total}'

    return res