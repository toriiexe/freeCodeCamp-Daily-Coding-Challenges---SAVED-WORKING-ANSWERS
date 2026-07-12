// JavaScript solution for 2026-02-09
// 2026 Winter Games Day 4: Ski Jumping
function skiJumpMedal(distancePoints, stylePoints, windComp, kPointBonus) {
    const ranking = [165.5, 172.0, 158.0, 180.0, 169.5, 175.0, 162.0, 170.0].sort().reverse()

    const total = distancePoints + stylePoints + windComp + kPointBonus

    if (total > ranking[0]) return 'Gold';
    if (total > ranking[1]) return 'Silver';
    if (total > ranking[2]) return 'Bronze';
    return 'No Medal';
}