# Python solution for 2026-03-24
# Passing Exam Count
def passing_count(scores, passing_score):
    return sum([1 for score in scores if score >= passing_score])