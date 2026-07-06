// JavaScript solution for 2026-06-15
// Number Sort
function sortNumbers(str) {
    let res = [];
    for (const s of str.split(',')){
        res.push(Number(s));
    }
    return res.sort((a, b) => a - b);
}