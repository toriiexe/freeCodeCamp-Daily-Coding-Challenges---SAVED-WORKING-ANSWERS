// JavaScript solution for 2025-09-13
// Missing Numbers
function findMissingNumbers(arr) {
    let res = [];

    for (let i = 1; i <= Math.max(...arr); i++){
        if (!(arr.includes(i))){
        res.push(i);
        }
    }
    
    return res;
}