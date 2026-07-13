# Python solution for 2026-02-20
# 2026 Winter Games Day 15: Freestyle Skiing
def is_valid_trick(trick_name):
    first_parts = ['Misty', 'Ghost', 'Thunder', 'Solar', 'Sky', 'Phantom', 'Frozen', 'Polar']

    second_parts = ['Twister', 'Icequake', 'Avalanche', 'Vortex', 'Snowstorm', 'Frostbite', 'Blizzard', 'Shadow']

    first_part, second_part = trick_name.split()
    
    return (first_part in first_parts) and (second_part in second_parts)