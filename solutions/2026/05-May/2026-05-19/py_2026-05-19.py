# Python solution for 2026-05-19
# Sleep Debt
def sleep_debt(hours_slept, target_hours):
    howManyNightsSlept = len(hours_slept)
    shouldHaveSlept = target_hours * howManyNightsSlept
    totalSlept = sum(hours_slept)
    debt = shouldHaveSlept - totalSlept + target_hours
    return max(debt, 0)

"""
# Python solution for 2026-05-19
# Sleep Debt - SHORTER SOLUTION
def sleep_debt(hours_slept, target_hours):
    debt = (len(hours_slept) + 1) * target_hours - sum(hours_slept)
    return max(debt, 0)
"""