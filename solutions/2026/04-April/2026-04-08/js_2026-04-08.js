// JavaScript solution for 2026-04-08
// FizzBuzz Validator
function isFizzBuzz(arr) {
    let start;

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (Number.isInteger(el)) {
            start = el - i;
            break;
        }
    }

    if (start === undefined) {
        return false;
    }

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        const n = start + i;

        if (n % 15 === 0) {
            if (el !== "FizzBuzz") {
                return false;
            }
        } else if (n % 3 === 0) {
            if (el !== "Fizz") {
                return false;
            }
        } else if (n % 5 === 0) {
            if (el !== "Buzz") {
                return false;
            }
        } else {
            if (el !== n) {
                return false;
            }
        }
    }

    return true;
}