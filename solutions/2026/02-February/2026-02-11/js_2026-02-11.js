// JavaScript solution for 2026-02-11
// 2026 Winter Games Day 6: Figure Skating
function computeScore(judgeScores, ...penalties) {
    return judgeScores.reduce((a, b) => a + b, 0) - Math.min(...judgeScores) - Math.max(...judgeScores) - penalties.reduce((a, b) => a + b, 0);
}