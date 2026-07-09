// JavaScript solution for 2025-11-23
// Character Count
function countCharacters(sentence) {
    let res = [];
    const chars = new Set(sentence.toLowerCase());

    for (const ch of chars) {
        if ('a' <= ch && ch <= 'z') {
        let count = 0;

        for (const c of sentence.toLowerCase()) {
            if (c === ch) {
            count++;
            }
        }

        res.push(`${ch} ${count}`);
        }
    }

    return res.sort();
}