// JavaScript solution for 2026-02-10
// 2026 Winter Games Day 5: Cross-Country Skiing
function getRelativeResults(results) {
    const toSec = [];

    for (const r of results) {
        const [h, m, s] = r.split(':').map(Number);
        toSec.push(h * 3600 + m * 60 + s);
    }

    const behind = ['0'];
    const winner = toSec[0];

    for (let i = 1; i < toSec.length; i++) {
        const diff = toSec[i] - winner;
        behind.push(`+${Math.floor(diff / 60)}:${String(diff % 60).padStart(2, '0')}`);
    }

    return behind;
}