# Python solution for 2026-02-10
# 2026 Winter Games Day 5: Cross-Country Skiing
def get_relative_results(results):
    toSec = []
    for r in results:
        h, m, s = map(int, r.split(':'))
        toSec.append(h * 3600 + m * 60 + s)

    behind = ['0']
    winner = toSec[0]

    for i in range(1, len(toSec)):
        diff = toSec[i] - winner
        behind.append(f'+{diff//60}:{diff%60:02d}')

    return behind