// JavaScript solution for 2026-04-02
// Capitalized Fibonacci
function capitalizeFibonacci(str) {
    const fib = [0, 1];
    let a = 0;
    let b = 1;

    while (b < str.length) {
        const next = a + b;
        fib.push(next);
        a = b;
        b = next;
    }

    let result = '';

    for (let i = 0; i < str.length; i++) {
        const c = str[i];

        if (/[a-z]/i.test(c)) {
            result += fib.includes(i) ? c.toUpperCase() : c.toLowerCase();
        } else {
            result += c;
        }
    }

    return result;
}