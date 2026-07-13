// JavaScript solution for 2026-02-25
// Sequential Difference
function findDifferences(arr) {
    const res = [];

    for (let i = 0; i < arr.length; i++){
        if (i !== arr.length - 1){
        res.push(arr[i+1] - arr[i]);
        } else{
        res.push(0);
        }
    }
    
    return res;
}

/*
// Sequential Difference - SHORTER VERSION
function findDifferences(arr) {
    return arr.map((num, i) => arr[i + 1] - num || 0);
}
*/