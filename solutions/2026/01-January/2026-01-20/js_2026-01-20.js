// JavaScript solution for 2026-01-20
// Consonant Case
function toConsonantCase(str) {
    let res = '';
    for (const c of str){
        if ('aeiouAEIOU'.includes(c)){
        res += c.toLowerCase();
        } else if (c === '-'){
        res += '_';
        } else{
        res += c.toUpperCase();
        }
    }
    return res;
}