// JavaScript solution for 2026-06-28
// Connect 3
function connectThree(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    function find(x, y, player) {
        if (x >= rows || y < 0) return false;

        if (matrix[x][y] === player) {
        // ↓
        if (x + 2 < rows)
            if (matrix[x + 1][y] === player && matrix[x + 2][y] === player)
            return [player, [x, y], [x + 1, y], [x + 2, y]];

        // ←
        if (y - 2 >= 0)
            if (matrix[x][y - 1] === player && matrix[x][y - 2] === player)
            return [player, [x, y - 2], [x, y - 1], [x, y]];

        // ↙
        if (x + 2 < rows && y - 2 >= 0)
            if (matrix[x + 1][y - 1] === player && matrix[x + 2][y - 2] === player)
            return [player, [x, y], [x + 1, y - 1], [x + 2, y - 2]];

        // ↖
        if (x - 2 >= 0 && y - 2 >= 0)
            if (matrix[x - 1][y - 1] === player && matrix[x - 2][y - 2] === player)
            return [player, [x - 2, y - 2], [x - 1, y - 1], [x, y]];

        // ↘
        if (x + 2 < rows && y + 2 < cols)
            if (matrix[x + 1][y + 1] === player && matrix[x + 2][y + 2] === player)
            return [player, [x, y], [x + 1, y + 1], [x + 2, y + 2]];

        // ↗
        if (x - 2 >= 0 && y + 2 < cols)
            if (matrix[x - 1][y + 1] === player && matrix[x - 2][y + 2] === player)
            return [player, [x - 2, y + 2], [x - 1, y + 1], [x, y]];
        }

        if (y + 1 < cols)
        return find(x, y + 1, player);
        else
        return find(x + 1, 0, player);
    }

    const r = find(0, 0, "R");
    if (r) return r;

    const y = find(0, 0, "Y");
    if (y) return y;

    return [];
}