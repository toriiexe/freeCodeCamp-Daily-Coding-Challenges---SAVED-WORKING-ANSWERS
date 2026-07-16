// JavaScript solution for 2025-08-27
// Unorder of Operations
function evaluate(numbers, operators) {
    const opCount = operators.length;
    let total = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        const op = operators[(i - 1) % opCount];

        if (op === '+') {
            total += numbers[i];
        } else if (op === '-') {
            total -= numbers[i];
        } else if (op === '*') {
            total *= numbers[i];
        } else if (op === '/') {
            total /= numbers[i];
        } else if (op === '%') {
            total %= numbers[i];
        }
    }

    return total;
}