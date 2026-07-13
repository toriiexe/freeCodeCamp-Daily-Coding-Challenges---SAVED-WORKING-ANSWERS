// JavaScript solution for 2026-02-28
// Add Punctuation
function addPunctuation(sentences) {
    return sentences.replace(/\s(?=[A-Z])/g, '. ') + '.';
}