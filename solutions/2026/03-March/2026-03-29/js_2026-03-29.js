// JavaScript solution for 2026-03-29
// ISBN-10 Validator
function isValidIsbn10(str) {
    str = str.replace(/-/g, '');

    if (!/^[0-9]{9}[0-9X]$/.test(str)) {
        return false;
    }

    let total = 0;

    for (let i = 0; i < str.length; i++) {
        let value = str[i] === 'X' ? 10 : Number(str[i]);
        total += value * (i + 1);
    }

    return total % 11 === 0;
}