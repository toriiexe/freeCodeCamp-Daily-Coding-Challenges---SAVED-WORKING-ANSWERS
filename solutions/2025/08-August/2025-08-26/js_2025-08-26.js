// JavaScript solution for 2025-08-26
// Reverse Parenthesis
function decode(s) {
    const stack = [''];

    for (const ch of s) {
        if (ch === '(') {
            stack.push('');
        } else if (ch === ')') {
            const reversed = stack.pop().split('').reverse().join('');
            stack[stack.length - 1] += reversed;
        } else {
            stack[stack.length - 1] += ch;
        }
    }

    return stack[0];
}