// JavaScript solution for 2026-06-13
// Zoning Regulations
const forbidden = {
    i: ['R', 'I'],
    A: ['C'],
    R: ['i', 'C'],
    I: ['i'],
    C: ['R', 'A']
};

function getZoneViolations(grid) {
    const dirs = [
             [0, 1],
        [-1, 0], [1, 0],
             [0, -1]
    ];

    const res = [];

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const cell = grid[r][c];

            if (cell === '') continue;

            for (const d of dirs) {
                const dx = r + d[0];
                const dy = c + d[1];

                if (
                    dx >= 0 && dx < grid.length &&
                    dy >= 0 && dy < grid[dx].length
                ) {
                    const neighbour = grid[dx][dy];

                    if (forbidden[cell].includes(neighbour)) {
                        res.push([r, c]);
                        break;
                    }
                }
            }
        }
    }

    return res;
}