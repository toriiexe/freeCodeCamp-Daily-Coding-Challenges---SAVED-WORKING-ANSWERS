// JavaScript solution for 2026-03-15
// Captured Chess Piece
function getCapturedValue(pieces) {
    const board = {
        P: 1,
        R: 5,
        N: 3,
        B: 3,
        Q: 9,
        K: 0
    };

    if (!pieces.includes('K')) {
        return "Checkmate";
    }

    let total = 8 * 1 + 2 * 5 + 2 * 3 + 2 * 3 + 1 * 9;

    for (const piece of pieces) {
        total -= board[piece];
    }

    return total;
}