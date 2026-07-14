# Python solution for 2026-02-17
# 2026 Winter Games Day 12: Bobsled
def check_eligibility(athlete_weights, sled_weight):
    sled = {
        1: 162,
        2: 170,
        4: 210
    }

    sled_with_athlethes = {
        1: 247,
        2: 390,
        4: 630
    }

    team_size = len(athlete_weights)
    total_weight = sum(athlete_weights) + sled_weight

    return 'Eligible' if (sled_weight >= sled[team_size] and (sled_with_athlethes[team_size] >= total_weight)) else 'Not Eligible'