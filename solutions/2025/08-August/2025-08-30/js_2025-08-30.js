// JavaScript solution for 2025-08-30
// Array Duplicates
function findDuplicates(arr) {
    const count = {};
    const res = [];

    for (const num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (const num in count) {
        if (count[num] > 1) {
            res.push(Number(num));
        }
    }

    return res.sort((a, b) => a - b);
}