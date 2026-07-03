// JavaScript solution for 2026-05-26
// Sum of Differences
function sumOfDifferences(arr) {
    let s = 0;
    
    for (let i = 0; i < arr.length - 1; i++){
        s += arr[i+1] - arr[i];
    }
    return s;
}