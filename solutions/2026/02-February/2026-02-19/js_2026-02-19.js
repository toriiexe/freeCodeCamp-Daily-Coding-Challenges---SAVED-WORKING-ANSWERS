// JavaScript solution for 2026-02-19
// 2026 Winter Games Day 14: Ski Mountaineering
function avalancheRisk(snowDepth, slope) {
    const risks = {
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
    };

    return risks[slope][snowDepth];
}