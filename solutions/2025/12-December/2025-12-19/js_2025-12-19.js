// JavaScript solution for 2025-12-19
// Pairwise
function pairwise(arr, target) {
    let indx = 0;
    const used = new Array(arr.length).fill(false);

    for (let i = 0; i < arr.length; i++) {
        if (used[i]) continue;

        for (let j = i + 1; j < arr.length; j++) {
            if (!used[j] && arr[i] + arr[j] === target) {
                indx += i + j;
                used[i] = true;
                used[j] = true;
                break;
            }
        }
    }

    return indx;
}