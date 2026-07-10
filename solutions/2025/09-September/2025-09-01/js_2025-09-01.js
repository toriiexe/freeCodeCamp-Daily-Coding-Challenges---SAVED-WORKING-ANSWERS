// JavaScript solution for 2025-09-01
// Tribonacci Sequence
function tribonacciSequence(startSequence, length) {
    if (length === 0) {
        return [];
    }

    let res = startSequence.slice(0, length);

    while (res.length < length) {
        const next = res[res.length - 1] + res[res.length - 2] + res[res.length - 3];
        res.push(next);
    }

    return res;
}