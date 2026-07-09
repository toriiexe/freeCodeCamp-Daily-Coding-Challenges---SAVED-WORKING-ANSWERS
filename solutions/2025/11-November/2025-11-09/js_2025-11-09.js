// JavaScript solution for 2025-11-09
// Word Search
function findWord(matrix, word) {
    for (let r = 0; r < matrix.length; r++) {
        let row = matrix[r].join("");

        if (row.includes(word)) {
            let s = row.indexOf(word);
            return [[r, s], [r, s + word.length - 1]];
        }

        if (row.includes([...word].reverse().join(""))) {
            let s = row.indexOf([...word].reverse().join(""));
            return [[r, s + word.length - 1], [r, s]];
        }
    }

    for (let c = 0; c < matrix[0].length; c++) {
        let col = "";

        for (let r = 0; r < matrix.length; r++)
            col += matrix[r][c];

        if (col.includes(word)) {
            let s = col.indexOf(word);
            return [[s, c], [s + word.length - 1, c]];
        }

        if (col.includes([...word].reverse().join(""))) {
            let s = col.indexOf([...word].reverse().join(""));
            return [[s + word.length - 1, c], [s, c]];
        }
    }
}