// JavaScript solution for 2026-06-07
// Last Load
function lastLoadDate(scoops, usage) {
    let sUsage = 0;
    for (const n of usage){
        sUsage += n;
    }
    return Math.floor(scoops / (sUsage / usage.length));
}