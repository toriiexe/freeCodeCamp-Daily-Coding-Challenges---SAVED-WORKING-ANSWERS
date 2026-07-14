// JavaScript solution for 2026-02-17
// 2026 Winter Games Day 12: Bobsled
function checkEligibility(athleteWeights, sledWeight) {
    const minSled = {
        1: 162,
        2: 170,
        4: 210
    };

    const maxTotal = {
        1: 247,
        2: 390,
        4: 630
    };

    const teamSize = athleteWeights.length;
    const totalWeight = athleteWeights.reduce((sum, weight) => sum + weight, 0) + sledWeight;

    return sledWeight >= minSled[teamSize] && totalWeight <= maxTotal[teamSize] ? "Eligible" : "Not Eligible";
}