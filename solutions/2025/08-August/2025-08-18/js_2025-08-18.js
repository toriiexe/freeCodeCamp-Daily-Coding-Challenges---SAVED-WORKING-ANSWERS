// JavaScript solution for 2025-08-18
// Factorializer
function factorial(n) {
    if (n === 0){
        return 1;
    }
    
    return n * factorial(n - 1);
}