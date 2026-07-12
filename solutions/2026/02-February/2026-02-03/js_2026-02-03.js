// JavaScript solution for 2026-02-03
// String Mirror
function mirror(str) {
    return str + str.split('').reverse().join('');
}