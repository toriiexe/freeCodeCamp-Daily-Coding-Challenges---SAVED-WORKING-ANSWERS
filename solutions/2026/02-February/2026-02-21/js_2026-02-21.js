// JavaScript solution for 2026-02-21
// 2026 Winter Games Day 16: Curling
function scoreCurling(house) {
    const red = [0, 0, 0];
    const yellow = [0, 0, 0];

    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            if (house[r][c] === '.') continue;

            let ring;
            if (r === 2 && c === 2) {
                ring = 0;
            } else if (Math.abs(r - 2) <= 1 && Math.abs(c - 2) <= 1) {
                ring = 1;
            } else {
                ring = 2;
            }

            if (house[r][c] === 'R') {
                red[ring]++;
            } else {
                yellow[ring]++;
            }
        }
    }

    const redClosest = red.findIndex(x => x > 0);
    const yellowClosest = yellow.findIndex(x => x > 0);

    if (redClosest === -1 && yellowClosest === -1) {
        return 'No points awarded';
    }

    if (redClosest === -1) {
        return `Y: ${yellow.reduce((sum, x) => sum + x, 0)}`;
    }

    if (yellowClosest === -1) {
        return `R: ${red.reduce((sum, x) => sum + x, 0)}`;
    }

    if (redClosest < yellowClosest) {
        let points = 0;
        for (let i = 0; i < yellowClosest; i++) {
            points += red[i];
        }
        return `R: ${points}`;
    }

    if (yellowClosest < redClosest) {
        let points = 0;
        for (let i = 0; i < redClosest; i++) {
            points += yellow[i];
        }
        return `Y: ${points}`;
    }

    return 'No points awarded';
}