// JavaScript solution for 2025-09-24
// Perfect Square
function isPerfectSquare(n) {
    if (n < 0) return false;
    
    const root = Math.floor(Math.sqrt(n));
    return root * root === n;
}