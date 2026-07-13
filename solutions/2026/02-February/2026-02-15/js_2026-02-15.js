// JavaScript solution for 2026-02-15
// 2026 Winter Games Day 10: Alpine Skiing
function getHillRating(drop, distance, type) {
    const steepness = drop / distance;

    const multiplier = type === "Downhill" ? 1.2 : type === "Slalom" ? 0.9 : 1.0;

    const adjusted_steepness = steepness * multiplier;

    if (adjusted_steepness <= 0.1) return 'Green';
    if (adjusted_steepness <= 0.25) return 'Blue';
    return 'Black';
}