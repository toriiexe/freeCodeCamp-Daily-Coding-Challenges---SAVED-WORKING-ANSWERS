// JavaScript solution for 2026-04-30
// Binary Crossword
function isInCrossword(char) {
    const board = [
        "01000001",
        "01101111",
        "01000100",
        "01100101",
        "01010010",
        "01010100",
        "01101000",
        "10101110"
    ];

    const row = [];

    for (let i = 0; i < board.length; i++) {
        row.push(String.fromCharCode(parseInt(board[i], 2)));
    }

    const rowReversed = [];

    for (let i = 0; i < board.length; i++) {
        rowReversed.push(String.fromCharCode(parseInt(board[i].split("").reverse().join(""), 2)));
    }

    const col = [];

    for (let j = 0; j < board.length; j++) {
        let column = "";

        for (let i = 0; i < board.length; i++) {
            column += board[i][j];
        }

        col.push(String.fromCharCode(parseInt(column, 2)));
    }

    const colReversed = [];

    for (let j = 0; j < board.length; j++) {
        let column = "";

        for (let i = 0; i < board.length; i++) {
            column += board[i][j];
        }

        colReversed.push(String.fromCharCode(parseInt(column.split("").reverse().join(""), 2)));
    }

    return row.includes(char) || rowReversed.includes(char) || col.includes(char) || colReversed.includes(char);
}