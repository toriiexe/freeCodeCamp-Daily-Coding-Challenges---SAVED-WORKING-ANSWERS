// JavaScript solution for 2025-12-26
// Sum of Divisors
function sumDivisors(n) {
    let total = 0;
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            total += i;
        }
    }
    return total;
}