# Python solution for 2026-02-07
# 2026 Winter Games Day 2: Snowboarding
def get_landing_stance(start_stance, rotation):
    reversed_start_stance = {
        'Regular': 'Goofy',
        'Goofy': 'Regular'
    }
    return reversed_start_stance[start_stance] if (abs(rotation) // 180) % 2 != 0 else start_stance