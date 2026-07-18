// JavaScript solution for 2026-04-26
// FizzBuzz Explosion
function explodeFizzbuzz(targetZCount) {
    let res = 'fizzbuzz';
    let temp = '';
    let steps = 0;

    while ((res.match(/z/g) || []).length < targetZCount) {
        for (const [i, c] of [...res].entries()) {
        const pos = i + 1;

        if (pos % 15 === 0) {
            temp += 'fizzbuzz';
        } else if (pos % 3 === 0) {
            temp += 'fizz';
        } else if (pos % 5 === 0) {
            temp += 'buzz';
        } else {
            temp += c;
        }
        }

        res = temp;
        temp = '';
        steps++;
    }

    return steps;
}