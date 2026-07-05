// JavaScript solution for 2026-05-31
// Parentheses Combinations
function factorialBigInt(n) {
    if (n < 0) return undefined;
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
        result *= i;
    }
    return result;
}

function getCombinations(n) {
    n = BigInt(n);
    return factorialBigInt(2n * n) / (factorialBigInt(n + 1n) * factorialBigInt(n));
}