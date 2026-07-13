# Python solution for 2026-02-19
# 2026 Winter Games Day 14: Ski Mountaineering
def avalanche_risk(snow_depth, slope):
    risks = {
        'Gentle': {
            'Shallow': 'Safe', 
            'Moderate': 'Safe', 
            'Deep': 'Safe'
            },
        'Steep': {
            'Shallow': 'Safe', 
            'Moderate': 'Risky', 
            'Deep': 'Risky'
            },
        'Very Steep': {
            'Shallow': 'Safe', 
            'Moderate': 'Risky', 
            'Deep': 'Risky'
            }
    }

    return risks[slope][snow_depth]