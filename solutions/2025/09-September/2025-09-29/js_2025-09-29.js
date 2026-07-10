// JavaScript solution for 2025-09-29
// Longest Word
function getLongestWord(sentence) {
    const s = sentence.replaceAll('.', '');
    let longestWord = '';

    for (const word of s.split(/\s+/)) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}