// JavaScript solution for 2025-08-17
// Targeted Sum
function findTarget(arr, target) {
    const d = new Map();

    for (let i = 0; i < arr.length; i++) {
        const needed = target - arr[i];

        if (d.has(needed)) {
            return [d.get(needed), i];
        }

        d.set(arr[i], i);
    }

    return "Target not found";
}