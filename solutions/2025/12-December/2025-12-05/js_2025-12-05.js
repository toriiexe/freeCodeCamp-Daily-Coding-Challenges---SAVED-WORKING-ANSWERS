// JavaScript solution for 2025-12-05
// Symmetric Difference
function difference(arr1, arr2) {
    const res = [];

    for (const x of arr1){
        if (!(arr2.includes(x)) && !(res.includes(x))){
            res.push(x);
        }
    }

    for (const y of arr2){
        if (!(arr1.includes(y)) && !(res.includes(y))){
            res.push(y);
        }
    }

    return res;
}