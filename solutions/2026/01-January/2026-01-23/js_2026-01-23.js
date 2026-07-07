// JavaScript solution for 2026-01-23
// Hex Validator
function isValidHex(str) {
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(str);
}