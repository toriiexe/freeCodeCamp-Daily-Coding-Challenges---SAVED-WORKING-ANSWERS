// JavaScript solution for 2025-08-13
// Fibonacci Sequence
function fibonacciSequence(startSequence, length) {
    if (length === 0) {
        return [];
    }

    let x = startSequence[0];
    let y = startSequence[1];
    let arr = startSequence.slice(0, length);

    for (let i = 0; i < length - 2; i++) {
        [x, y] = [y, y + x];
        arr.push(y);
    }

    return arr;
}