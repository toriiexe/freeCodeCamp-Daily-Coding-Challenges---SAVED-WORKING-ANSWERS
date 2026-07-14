// JavaScript solution for 2025-11-26
// BuzzFizz
function isFizzBuzz(sequence) {
  for (let i = 1; i <= sequence.length; i++) {
    if (i % 15 === 0) {
      if (sequence[i - 1] !== 'FizzBuzz') return false;
    } else if (i % 3 === 0) {
      if (sequence[i - 1] !== 'Fizz') return false;
    } else if (i % 5 === 0) {
      if (sequence[i - 1] !== 'Buzz') return false;
    } else if (sequence[i - 1] !== i) {
      return false;
    }
  }

  return true;
}