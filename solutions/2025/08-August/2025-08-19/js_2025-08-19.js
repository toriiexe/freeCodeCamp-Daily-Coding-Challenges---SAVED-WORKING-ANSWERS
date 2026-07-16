// JavaScript solution for 2025-08-19
// Sum of Squares
function sumOfSquares(n) {
    let s = 0;

    for (let i = 1; i <= n; i++){
        s += i * i;
    }

    return s;
}