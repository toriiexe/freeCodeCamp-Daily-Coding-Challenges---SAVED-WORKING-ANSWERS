// JavaScript solution for 2026-05-09
// Transposed Matrix
function transpose(matrix) {
    let m = [];

    for (let i = 0; i < matrix[0].length; i++) {
        m[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            m[i][j] = matrix[j][i];
        }
    }

    return m;
}