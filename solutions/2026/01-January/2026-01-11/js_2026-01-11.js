// JavaScript solution for 2026-01-11
// Par for the Hole
function golfScore(par, strokes) {
    if (strokes === 1) {
        return 'Hole in one!';
    } else if (strokes === par - 2) {
        return 'Eagle';
    } else if (strokes === par - 1) {
        return 'Birdie';
    } else if (par === strokes) {
        return 'Par';
    } else if (strokes === par + 1) {
        return 'Bogey';
    } else if (strokes === par + 2) {
        return 'Double bogey';
    }
}