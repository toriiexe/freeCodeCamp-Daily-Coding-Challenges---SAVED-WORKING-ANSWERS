// JavaScript solution for 2026-02-18
// 2026 Winter Games Day 13: Nordic Combined
function calculateStartDelays(jumpScores) {
    const theBest = Math.max(...jumpScores);
    const res = [];

    for (const jumpScore of jumpScores) {
        res.push(Math.ceil((theBest - jumpScore) * 1.5));
    }

    return res;
}