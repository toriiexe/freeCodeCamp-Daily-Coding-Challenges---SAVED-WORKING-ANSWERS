// JavaScript solution for 2026-04-11
// Rook and Bishop Attack
function rookBishopAttack(rook, bishop) {
    if (rook[0] === bishop[0] || rook[1] === bishop[1]) {
        return 'rook';
    }

    if (Math.abs(rook.charCodeAt(0) - bishop.charCodeAt(0)) === Math.abs(Number(rook[1]) - Number(bishop[1]))) {
        return 'bishop';
    }

    return 'neither';
}