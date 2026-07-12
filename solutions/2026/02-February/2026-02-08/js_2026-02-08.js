// JavaScript solution for 2026-02-08
// 2026 Winter Games Day 3: Biathlon
function calculatePenaltyDistance(rounds) {
    let s = 0;

    for (let i = 0; i < rounds.length; i++){
        s += (5 - rounds[i]) * 150;
    }

    return s;
}