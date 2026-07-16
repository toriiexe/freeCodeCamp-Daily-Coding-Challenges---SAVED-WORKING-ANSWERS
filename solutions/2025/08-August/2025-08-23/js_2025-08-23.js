// JavaScript solution for 2025-08-23
// Unnatural Prime
function isUnnaturalPrime(n) {
    const num = Math.abs(n);

    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
        return false;
        }
    }

    return true;
}