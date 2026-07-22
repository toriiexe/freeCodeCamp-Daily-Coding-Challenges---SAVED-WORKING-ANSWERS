// JavaScript solution for 2025-12-04
// Permutation Count
function fact(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * fact(n - 1);
}

function countPermutations(s) {
    const chars = {};

    for (const c of s) {
        if (!(c in chars)) {
            chars[c] = 1;
        } else {
            chars[c] += 1;
        }
    }

    let repetitionFactor = 1;

    for (const v of Object.values(chars)) {
        repetitionFactor *= fact(v);
    }

    return fact(s.length) / repetitionFactor;
}