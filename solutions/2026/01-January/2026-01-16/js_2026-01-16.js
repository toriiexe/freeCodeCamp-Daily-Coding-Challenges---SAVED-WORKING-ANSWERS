// JavaScript solution for 2026-01-16
// Integer Hypotenuse
function isIntegerHypotenuse(a, b) {
    const c = Math.sqrt(a ** 2 + b ** 2);
    return Number.isInteger(c);
}