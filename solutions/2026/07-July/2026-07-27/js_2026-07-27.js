// JavaScript solution for 2026-07-27
// Pronic Number
function isPronic(n) {
    let i = 0;

    while (i * (i+1) <= n){
        if (i * (i+1) === n){
            return true;
        }
        i++;
    }

    return false;
}