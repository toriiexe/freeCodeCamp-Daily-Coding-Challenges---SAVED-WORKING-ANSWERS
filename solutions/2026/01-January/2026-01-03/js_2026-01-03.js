// JavaScript solution for 2026-01-03
// Left-Handed Seat at the Table
function findLeftHandedSeats(table) {
    let total = 0;

    for (let r = 0; r < 2; r++) {
        if (r === 0) {
            for (let p = 0; p < 4; p++) {
                if (table[r][p] === 'U') {
                    if (p === 3) {
                        total += 1;
                    } else if (table[r][p + 1] !== 'R') {
                        total += 1;
                    }
                }
            }
        } else {
            for (let p = 0; p < 4; p++) {
                if (table[r][p] === 'U') {
                    if (p === 0) {
                        total += 1;
                    } else if (table[r][p - 1] !== 'R') {
                        total += 1;
                    }
                }
            }
        }
    }

    return total;
}