// JavaScript solution for 2026-05-10
// ISBN-13 Validator
function isValidIsbn13(str) {
    const s = str.replace(/-/g, '');

    if (s.length !== 13) {
        return false;
    }

    for (let c of s) {
        if (c < '0' || c > '9') {
        return false;
        }
    }

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const digit = Number(s[i]);

        total += (i % 2 === 0) ? digit : digit * 3;
    }

    return total % 10 === 0;
}