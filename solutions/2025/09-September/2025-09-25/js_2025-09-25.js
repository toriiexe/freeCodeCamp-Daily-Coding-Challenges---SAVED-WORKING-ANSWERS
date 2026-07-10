// JavaScript solution for 2025-09-25
// 2nd Largest
function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (const num of new Set(arr)) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second) {
            second = num;
        }
    }

    return second;
}

/*
// 2nd Largest
function secondLargest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a)[1];
}
*/