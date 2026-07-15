// JavaScript solution for 2025-12-20
// Purge Most Frequent
function purgeMostFrequent(arr) {
    const counts = {};

    for (const el of arr) {
        counts[el] = (counts[el] || 0) + 1;
    }

    const most = Math.max(...Object.values(counts));

    return arr.filter(el => counts[el] !== most);
}