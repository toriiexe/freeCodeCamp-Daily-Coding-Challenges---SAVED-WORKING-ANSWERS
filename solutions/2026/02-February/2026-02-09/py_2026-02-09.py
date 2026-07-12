# Python solution for 2026-02-09
# 2026 Winter Games Day 4: Ski Jumping
def ski_jump_medal(distance_points, style_points, wind_comp, k_point_bonus):
    ranking = sorted([165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0], reverse=True)

    total = distance_points + style_points + wind_comp + k_point_bonus
    
    if (total > ranking[0]):
        return 'Gold'
    elif (total > ranking[1]):
        return 'Silver'
    elif (total > ranking[2]):
        return 'Bronze'
    else:
        return 'No Medal'