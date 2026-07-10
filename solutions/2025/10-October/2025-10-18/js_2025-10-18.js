// JavaScript solution for 2025-10-18
// Missing Socks
function sockPairs(pairs, cycles) {
    let single = pairs * 2;

    for (let cycle = 1; cycle <= cycles; cycle++) {
        if (cycle % 2 === 0) {
            single--;
        }

        if (cycle % 3 === 0) {
            single++;
        }

        if (cycle % 5 === 0) {
            single--;
        }

        if (cycle % 10 === 0) {
            single += 2;
        }

        single = Math.max(0, single);
    }

    return Math.floor(single / 2);
}