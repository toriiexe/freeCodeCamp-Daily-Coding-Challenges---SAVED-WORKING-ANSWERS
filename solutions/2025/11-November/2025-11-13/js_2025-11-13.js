// JavaScript solution for 2025-11-13
// Array Shift
function shiftArray(arr, n) {
    const mod = n % arr.length;

    if (n >= 0) {
        return arr.slice(mod).concat(arr.slice(0, mod));
    } else {
        return arr.slice(mod).concat(arr.slice(0, mod));
    }
}