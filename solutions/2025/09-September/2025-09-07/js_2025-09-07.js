// JavaScript solution for 2025-09-07
// Roman Numeral Parser
function parseRomanNumeral(numeral) {
    const dict = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let last = 0;
    let total = 0;

    for (const c of numeral.split('').reverse()) {
        const value = dict.get(c);

        if (value < last) {
            total -= value;
        } else {
            total += value;
        }

        last = value;
    }

    return total;
}