// JavaScript solution for 2026-03-23
// No Consecutive Repeats
function hasNoRepeats(str) {
    for (let i = 0; i < str.length-1; i++){
        if (str[i] === str[i+1]){
        return false;
        }
    }
    return true;
}