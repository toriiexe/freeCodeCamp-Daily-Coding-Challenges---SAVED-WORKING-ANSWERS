// JavaScript solution for 2026-03-02
// Sum the Letters
function sumLetters(str) {
    return [...str.toUpperCase()].reduce((sum, c) => sum + (/[A-Z]/.test(c) ? c.charCodeAt(0) - 'A'.charCodeAt(0) + 1 : 0), 0);
}