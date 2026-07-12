// JavaScript solution for 2026-02-12
// 2026 Winter Games Day 7: Speed Skating
function largestDifference(skater1, skater2) {
    let differences = skater1.map(function (e, i) {
        return Math.abs(e - skater2[i]);
    });

    return differences.indexOf(Math.max(...differences)) + 1;
}