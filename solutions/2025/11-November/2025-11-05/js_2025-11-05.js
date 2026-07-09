// JavaScript solution for 2025-11-05
// Matrix Builder
function buildMatrix(rows, cols) {
    let matrix = [];
    for (let row = 0; row < rows; row++){
        let temp = [];
        for (let col = 0; col < cols; col++){
        temp.push(0);
        }
        matrix.push(temp);
    }
    return matrix;
}