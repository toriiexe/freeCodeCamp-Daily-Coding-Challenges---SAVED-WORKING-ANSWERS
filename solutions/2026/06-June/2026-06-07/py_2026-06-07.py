# Python solution for 2026-06-07
# Last Load
def last_load_date(scoops, usage):
    return scoops // (sum(usage) / len(usage))