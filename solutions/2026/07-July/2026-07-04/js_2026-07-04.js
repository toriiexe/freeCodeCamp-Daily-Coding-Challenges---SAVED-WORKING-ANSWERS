// JavaScript solution for 2026-07-04
// Kaprekar's Routine
function kaprekar(n) {
    let counter = 0;

    while (n != 6174){
        let s = String(n).padStart(4, "0").split("");
        let dsc = Number(s.slice().sort().join(""));
        let asc = Number(s.slice().sort().reverse().join(""));
        n = asc - dsc;
        counter ++;
    }
    return counter;
}