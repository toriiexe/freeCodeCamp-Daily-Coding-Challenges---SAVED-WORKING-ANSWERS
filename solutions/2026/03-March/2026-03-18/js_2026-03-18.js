// JavaScript solution for 2026-03-18
// Largest Number
function largestNumber(str) {
    const withoutSeparators = str.replace(/[,!?:;]/g, ' ').trim().split(/\s+/);
    const nums = withoutSeparators.map((n) => Number(n));
    return Math.max(...nums);
}