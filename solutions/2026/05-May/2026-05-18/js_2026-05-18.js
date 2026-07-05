// JavaScript solution for 2026-05-18
// Bingo Range
function getBingoRange(letter) {
    const d = {
        B: [1, 15],
        I: [16, 30],
        N: [31, 45],
        G: [46, 60],
        O: [61, 75]
    };

    const [start, end] = d[letter];
    const result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
    }

    return result;
}