// JavaScript solution for 2026-01-09
// Circular Prime
function isNumPrime(num) {
    if (num < 2) {
        return false;
    }

    if ([2, 3, 5].includes(num)) {
        return true;
    }

    if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
        return false;
    }

    for (let i = 7; i <= Math.sqrt(num); i += 10) {
        if (
            num % i === 0 ||
            num % (i + 2) === 0 ||
            num % (i + 4) === 0 ||
            num % (i + 6) === 0
        ) {
            return false;
        }
    }

    return true;
}

function isCircularPrime(n) {
    const nStr = String(n);

    for (let i = 0; i < nStr.length; i++) {
        const rotation = Number(nStr.slice(i) + nStr.slice(0, i));

        if (!isNumPrime(rotation)) {
            return false;
        }
    }

    return true;
}