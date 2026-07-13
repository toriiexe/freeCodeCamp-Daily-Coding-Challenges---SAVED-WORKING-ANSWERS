# Python solution for 2026-02-15
# 2026 Winter Games Day 10: Alpine Skiing
def get_hill_rating(drop, distance, hill_type):
    steepness = drop / distance

    multiplier = 1.2 if hill_type == 'Downhill' else 0.9 if hill_type == 'Slalom' else 1.0

    adjusted_steepness = steepness * multiplier

    if adjusted_steepness <= 0.1:
        return 'Green'
    elif adjusted_steepness <= 0.25:
        return 'Blue'
    else:
        return 'Black'