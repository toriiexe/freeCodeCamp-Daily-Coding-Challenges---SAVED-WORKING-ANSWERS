// JavaScript solution for 2026-04-07
// Palindrome Characters
function palindromeLocator(str) {
    const strLength = str.length;
    if (str === str.split('').reverse().join('')) {
        if (strLength % 2 === 1) {
            return str.slice(strLength / 2, strLength / 2 + 1);
        } else {
            return str.slice(strLength/ 2 - 1, strLength / 2) + str.slice(strLength / 2, strLength / 2 + 1);
        }
    }
    return 'none';
}