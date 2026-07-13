# Python solution for 2026-02-18
# 2026 Winter Games Day 13: Nordic Combined
from math import ceil
def calculate_start_delays(jump_scores):
    the_best = max(jump_scores)
    res = []

    for jump_score in jump_scores:
        res.append(ceil((the_best - jump_score) * 1.5))

    return res