// JavaScript solution for 2026-01-28
// Flatten the Array
function flatten(arr) {
    let res = [];

    for (const x of arr) {
        if (Array.isArray(x)) {
        res.push(...flatten(x));
        } else {
        res.push(x);
        }
    }

    return res;
}