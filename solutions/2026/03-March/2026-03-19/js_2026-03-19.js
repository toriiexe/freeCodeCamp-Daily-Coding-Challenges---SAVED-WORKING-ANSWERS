// JavaScript solution for 2026-03-19
// Inverted Matrix
function invertMatrix(matrix) {
    const values = [];

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (!values.includes(matrix[r][c])) {
                values.push(matrix[r][c]);
            }

            if (values.length === 2) {
                break;
            }
        }

        if (values.length === 2) {
            break;
        }
    }

    const res = [];

    for (const row of matrix) {
        const temp = [];

        for (const col of row) {
            if (col === values[0]) {
                temp.push(values[1]);
            } else {
                temp.push(values[0]);
            }
        }

        res.push(temp);
    }

    return res;
}