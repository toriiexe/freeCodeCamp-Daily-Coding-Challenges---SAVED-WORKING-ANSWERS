// JavaScript solution for 2026-03-03
// Perfect Cube Count
function countPerfectCubes(a, b) {
    let [s, e] = [a, b].sort((x, y) => x - y);
    let counter = 0;

    let root = Math.abs(e) ** (1 / 3);

    for (let i = -Math.floor(root) - 1; i <= Math.floor(root) + 1; i++) {
        if (s <= i ** 3 && i ** 3 <= e) {
            counter++;
        }
    }

    return counter;
}