// JavaScript solution for 2026-01-06
// vOwElcAsE
function vowelCase(str) {
    let res = [];

    for (const letter of str) {
        if ('aeiou'.includes(letter.toLowerCase())) {
        res.push(letter.toUpperCase());
        } else if (letter.match(/[a-zA-Z]/)) {
        res.push(letter.toLowerCase());
        } else {
        res.push(letter);
        }
    }

    return res.join('');
}