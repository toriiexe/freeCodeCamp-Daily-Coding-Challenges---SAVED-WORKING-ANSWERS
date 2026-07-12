// JavaScript solution for 2026-03-11
// Word Length Converter
function convertWords(str) {
    let res = [];

    for (const s of str.split(/\s+/)){
        res.push(s.length);

    }
    return res.join(' ');
}