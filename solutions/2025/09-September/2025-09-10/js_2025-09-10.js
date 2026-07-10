// JavaScript solution for 2025-09-10
// Array Diff
function arrayDiff(arr1, arr2) {
    let res = [];

    for (const x of arr1) {
        if (!arr2.includes(x) && !res.includes(x)) {
            res.push(x);
        }
    }

    for (const y of arr2) {
        if (!arr1.includes(y) && !res.includes(y)) {
            res.push(y);
        }
    }

    return res.sort();
}


/*
// Array Diff - SETS
function arrayDiff(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const res = [];

    for (const x of set1) {
        if (!set2.has(x)) res.push(x);
    }

    for (const y of set2) {
        if (!set1.has(y)) res.push(y);
    }

    return res.sort();
}
*/