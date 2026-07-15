// JavaScript solution for 2026-01-29
// Letters-Numbers
function separateLettersAndNumbers(str) {
    let prev = '';
    let res = '';

    for (const c of str) {
        if ((/\d/.test(c) && /\d/.test(prev)) || (/[a-zA-Z]/.test(c) && /[a-zA-Z]/.test(prev))) {
            res += c;
        } 
        else if ((/\d/.test(c) && /[a-zA-Z]/.test(prev)) || (/[a-zA-Z]/.test(c) && /\d/.test(prev))) {
            res += '-' + c;
        }
        else {
            res += c;
        }

        prev = c;
    }

    return res;
}