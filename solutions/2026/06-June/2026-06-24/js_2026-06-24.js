// JavaScript solution for 2026-06-24
// DNA Mutations
function detectMutations(strand1, strand2) {
    let res = [];
    for (let i = 0; i < strand1.length; i++){
        if (strand1[i] !== strand2[i]){
        res.push(i);
        }
    }
    return res;
}