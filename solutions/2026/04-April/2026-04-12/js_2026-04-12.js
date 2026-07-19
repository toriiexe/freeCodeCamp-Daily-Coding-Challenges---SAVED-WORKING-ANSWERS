// JavaScript solution for 2026-04-12
// Spiral Matrix
function spiralMatrix(matrix) {
    const snail = [];

    while (matrix.length) {
        snail.push(...matrix[0]);
        matrix.shift();

        matrix = matrix[0] ? matrix[0].map((_, i) => matrix.map(row => row[i])).reverse() : [];
    }

    return snail;
}