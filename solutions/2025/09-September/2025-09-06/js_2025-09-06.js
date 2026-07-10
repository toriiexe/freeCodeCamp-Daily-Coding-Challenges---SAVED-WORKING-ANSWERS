// JavaScript solution for 2025-09-06
// Matrix Rotate
function rotate(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    let res = []
    for (let i = 0; i < cols; i++){
        let temp = [];
        for (let j = 0; j < rows; j++){
        temp.push(0);
        }
        res.push(temp);
    }

    for (let r = 0; r < rows; r++){
        for (let c = 0; c < cols; c++){
        res[c][rows - 1 - r] = matrix[r][c]
        }
    }

    return res;
}