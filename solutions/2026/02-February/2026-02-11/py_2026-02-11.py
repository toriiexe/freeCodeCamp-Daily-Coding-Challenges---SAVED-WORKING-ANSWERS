# Python solution for 2026-02-11
# 2026 Winter Games Day 6: Figure Skating
def compute_score(judge_scores, *penalties):
    return sum(judge_scores) - min(judge_scores) - max(judge_scores) - sum(penalties)