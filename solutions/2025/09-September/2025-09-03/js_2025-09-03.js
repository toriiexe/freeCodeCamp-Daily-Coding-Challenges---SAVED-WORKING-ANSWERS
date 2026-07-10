// JavaScript solution for 2025-09-03
// Pangram
function isPangram(sentence, letters) {
    let sentenceSet = new Set([...sentence.toLowerCase()].filter(c => c.match(/[a-z]/)));

    let lettersSet = new Set(letters.toLowerCase());

    if (sentenceSet.size !== lettersSet.size) {
        return false;
    }

    for (let letter of lettersSet) {
        if (!sentenceSet.has(letter)) {
        return false;
        }
    }

    return true;
}