// JavaScript solution for 2026-05-13
// Offending Element
function findOffender(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            if (i > 0 && arr[i + 1] < arr[i - 1]) {
                return i + 1;
            }
            return i;
        }
    }
}