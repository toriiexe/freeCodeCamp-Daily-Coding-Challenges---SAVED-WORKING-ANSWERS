// JavaScript solution for 2026-05-24
// Roman Numeral Fixer
function toDecimal(roman) {
    const values = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
    };

    let sum = 0;
    for (const ch of roman) {
    sum += values[ch];
    }
    return sum;
}

function toRoman(n) {
    const roman = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let res = '';

    for (const [value, symbol] of roman) {
    while (n >= value) {
        res += symbol;
        n -= value;
    }
    }

    return res;
}

function fixNumerals(str) {
    return toRoman(toDecimal(str));
}