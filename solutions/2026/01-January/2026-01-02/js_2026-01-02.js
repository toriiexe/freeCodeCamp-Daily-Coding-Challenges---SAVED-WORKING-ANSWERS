// JavaScript solution for 2026-01-02
// Nth Fibonacci Number
function nthFibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n-1; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a;
}