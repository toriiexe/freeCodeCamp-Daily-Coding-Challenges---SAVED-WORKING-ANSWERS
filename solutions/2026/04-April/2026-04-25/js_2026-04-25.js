// JavaScript solution for 2026-04-25
// Word Decompressor
function decompress(str) {
    const firstPos = new Map();
    const result = [];

    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (/^\d+$/.test(word)) {
            result.push(firstPos.get(Number(word)));
        } else {
            firstPos.set(i + 1, word);
            result.push(word);
        }
    }

    return result.join(' ');
}