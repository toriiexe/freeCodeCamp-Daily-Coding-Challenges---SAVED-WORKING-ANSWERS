// JavaScript solution for 2025-09-09
// Unique Characters
function allUnique(str) {
    let chars = [];
    for (const c of str){
        if (chars.includes(c)){
            return false;
        } else{
            chars.push(c);
        }
    }
    return true;
}