// JavaScript solution for 2025-10-11
// Hex to Decimal
function hexToDecimal(hex) {
    let total = 0;

    const mapping = new Map([
        ['A', 10], ['B', 11], ['C', 12],
        ['D', 13], ['E', 14], ['F', 15]
    ]);

    for (const [i, digit] of [...hex.toUpperCase()].reverse().entries()) {
        let value = Number(digit);

        if (mapping.has(digit)) {
            value = mapping.get(digit);
        }

        total += value * 16 ** i;
    }

    return total;
}

/*
// Hex to dDecimal - SHORTER VERSION
function hexToDecimal(hex) {
    return parseInt(hex, 16);
}
*/