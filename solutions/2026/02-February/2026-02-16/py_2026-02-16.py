# Python solution for 2026-02-16
# 2026 Winter Games Day 11: Ice Hockey
import re
def get_semifinal_matchups(teams):
    scores = {}

    for team in teams:
        t = re.match(r'(.+): (\d+)-(\d+)-(\d+)-(\d+)', team)
        scores[t.group(1)] = int(t.group(2)) * 3 + int(t.group(3)) * 2 + int(t.group(4))

    s = sorted(scores, key=scores.get, reverse=True)

    return f'The semi-final games will be {s[0]} vs {s[3]} and {s[1]} vs {s[2]}.'