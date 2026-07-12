# Python solution for 2026-02-12
# 2026 Winter Games Day 7: Speed Skating
def largest_difference(skater1, skater2):
    differences = [abs(a - b) for a, b in zip(skater1, skater2)]
    return differences.index(max(differences)) + 1