# Python solution for 2026-02-08
# 2026 Winter Games Day 3: Biathlon
def calculate_penalty_distance(rounds):
    return sum([(5-rounds[i])*150 for i in range(len(rounds))])