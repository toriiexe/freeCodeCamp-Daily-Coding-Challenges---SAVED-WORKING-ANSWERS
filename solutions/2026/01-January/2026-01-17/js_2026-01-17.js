// JavaScript solution for 2026-01-17
// Knight Moves
function knightMoves(position) {
    const directions = [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2]
    ];

    const column = position.charCodeAt(0) - 'A'.charCodeAt(0);
    const row = Number(position[1]) - 1;

    let validMoves = [];

    for (const move of directions) {
        const newColumn = column + move[0];
        const newRow = row + move[1];

        if (newColumn >= 0 && newColumn <= 7 && newRow >= 0 && newRow <= 7) {
            validMoves.push([newColumn, newRow]);
        }
    }

    return validMoves.length;
}