// JavaScript solution for 2026-04-24
// Word Compressor
function compress(str) {
    const firstPos = new Map();
    const result = [];

    const words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (firstPos.has(word)) {
            result.push(String(firstPos.get(word)));
        } else {
            firstPos.set(word, i + 1);
            result.push(word);
        }
    }

    return result.join(' ');
}