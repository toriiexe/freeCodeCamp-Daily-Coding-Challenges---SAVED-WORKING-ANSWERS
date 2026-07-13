# Python solution for 2026-02-14
# 2026 Winter Games Day 9: Skeleton
import re
def get_difficulty(track):
    
    r_extra_points = re.findall('(R(?=L))', track)
    l_extra_points = re.findall('(L(?=R))', track)

    r_points = len(r_extra_points) * 15 + (track.count('R') - len(r_extra_points)) * 5
    l_points = len(l_extra_points) * 15 + (track.count('L') - len(l_extra_points)) * 5

    total = r_points + l_points

    if total >= 0 and total <= 100:
        return 'Easy'
    elif total <= 200:
        return 'Medium'
    else:
        return 'Hard'