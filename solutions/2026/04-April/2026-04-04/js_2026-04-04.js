// JavaScript solution for 2026-04-04
// Equation Validation
function calc(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

function isValidEquation(equation) {
    const el = equation.split(' ');

    if (el.length === 5) {
        return calc(+el[0], +el[2], el[1]) === +el[4];
    }

    if (el.length === 7) {
        if ('*/'.includes(el[3])) {
            const left = calc(+el[2], +el[4], el[3]);
            return calc(+el[0], left, el[1]) === +el[6];
        }

        if ('*/'.includes(el[1])) {
            const left = calc(+el[0], +el[2], el[1]);
            return calc(left, +el[4], el[3]) === +el[6];
        }

        const left = calc(+el[0], +el[2], el[1]);
        return calc(left, +el[4], el[3]) === +el[6];
    }

    return false;
}