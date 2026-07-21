// JavaScript solution for 2025-12-13
// Game of Life
function gameOfLife(grid) {
    const neighbours = [
        [-1, 1], [0, 1], [1, 1],
        [-1, 0],         [1, 0],
        [-1, -1], [0, -1], [1, -1]
    ];

    const res = [];

    for (let r = 0; r < grid.length; r++) {
        const line = [];

        for (let c = 0; c < grid[r].length; c++) {
            let neighboursCounter = 0;

            for (const neighbour of neighbours) {
                const nx = r + neighbour[0];
                const ny = c + neighbour[1];

                if (0 <= nx && nx < grid.length &&
                    0 <= ny && ny < grid[0].length) {

                    if (grid[nx][ny] === 1) {
                        neighboursCounter++;
                    }
                }
            }

            if (grid[r][c] === 0) {
                if (neighboursCounter === 3) {
                    line.push(1);
                } else {
                    line.push(0);
                }
            } else {
                if (neighboursCounter === 2 || neighboursCounter === 3) {
                    line.push(1);
                } else {
                    line.push(0);
                }
            }
        }

        res.push(line);
    }

    return res;
}