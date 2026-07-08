// JavaScript solution for 2026-01-30
// Valid Pawn Moves
function findPawnMoves(position) {
    const c = position[0];
    const r = Number(position[1]);

    let res = [];

    if (r < 8){
        res.push(`${c}${r + 1}`);
        if (r === 2){
            res.push(`${c}${r + 2}`);
        }
    }

    return res;
}
