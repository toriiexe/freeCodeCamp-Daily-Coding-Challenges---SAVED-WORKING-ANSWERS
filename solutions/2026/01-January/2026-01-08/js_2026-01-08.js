// JavaScript solution for 2026-01-08
// Sorted Array?
function isSorted(arr) {
    let asc = false;
    let desc = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            asc = true;
        } else if (arr[i] > arr[i + 1]) {
            desc = true;
        }
    }

    if (asc && desc) {
        return 'Not sorted';
    } else if (asc) {
        return 'Ascending';
    } else {
        return 'Descending';
    }
}