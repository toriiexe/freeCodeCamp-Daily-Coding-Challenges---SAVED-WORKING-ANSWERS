// JavaScript solution for 2026-04-15
// Sorted Array Swap
function sortAndSwap(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 3; i < arr.length; i += 3){
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
    return arr;
}