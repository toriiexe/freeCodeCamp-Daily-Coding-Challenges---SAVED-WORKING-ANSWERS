// JavaScript solution for 2025-11-20
// Longest Word
function longestWord(sentence) {
    let res = '';
    let len = 0;
    
    for (const word of sentence.split(' ')) {
        let clean = '';
        let lengthTemp = 0;

        for (const w of word) {
        if (('a' <= w && w <= 'z') || ('A' <= w && w <= 'Z')) {
            clean += w;
            lengthTemp++;
        }
        }

        if (lengthTemp > len) {
        res = clean;
        len = lengthTemp;
        }
    }
    
    return res;
}