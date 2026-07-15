// JavaScript solution for 2026-04-21
// Odd Words
function getOddWords(str) {
    const res = [];

    for (const word of str.split(' ')){
        if (word.length % 2 === 1){
        res.push(word);
        }
    }
    return res.join(' ');
}