// JavaScript solution for 2025-12-16
// Consonant Count
function hasConsonantCount(text, target) {
    let s = 0;
    for (const c of text){
        if (c.match(/[a-zA-Z]/) && !('aeiouAEIOU'.includes(c))){
        s++;
        }
    }
    return s === target;
}