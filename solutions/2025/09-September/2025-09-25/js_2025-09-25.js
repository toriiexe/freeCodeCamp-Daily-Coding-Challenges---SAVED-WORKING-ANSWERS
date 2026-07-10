// JavaScript solution for 2025-09-25
// 2nd Largest
function secondLargest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a)[1];
}
