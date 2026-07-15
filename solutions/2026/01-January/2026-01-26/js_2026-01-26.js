// JavaScript solution for 2026-01-26
// FizzBuzz Mini
function fizzBuzzMini(n) {
    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 == 0) return 'Fizz';
    if (n % 5 == 0) return 'Buzz';
    return n.toString();
}