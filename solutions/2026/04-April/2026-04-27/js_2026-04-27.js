// JavaScript solution for 2026-04-27
// Word Score
function getWordScore(word) {
    return [...word].reduce((s, w) => s + w.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) + 1, 0);
}