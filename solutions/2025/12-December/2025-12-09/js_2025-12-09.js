// JavaScript solution for 2025-12-09
// Most Frequent
function mostFrequent(arr) {
    const d = new Map();

    for (const el of arr) {
        d.set(el, (d.get(el) || 0) + 1);
    }

    return [...d.keys()].reduce((a, b) => d.get(a) > d.get(b) ? a : b);
}