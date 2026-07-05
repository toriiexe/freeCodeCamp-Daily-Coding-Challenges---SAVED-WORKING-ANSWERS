// JavaScript solution for 2026-05-02
// Deepest Brackets
function getDeepestBrackets(str) {
    let maxLevel = 0;
    let level = 0;

    for (const c of str) {
        if ('({['.includes(c)) {
        level += 1;
        if (level > maxLevel) {
            maxLevel = level;
        }
        } 
        else if (')]}'.includes(c)) {
        level -= 1;
        }
    }

    level = 0;
    let temp = '';
    let res = '';

    for (const c of str) {
        if ('({['.includes(c)) {
        level += 1;
        temp = '';
        } 
        else if (')]}'.includes(c)) {
        if (level === maxLevel) {
            res = temp;
            return res;
        }
        level -= 1;
        } 
        else {
        if (level === maxLevel) {
            temp += c;
        }
        }
    }

    return res;
}