// JavaScript solution for 2025-09-22
// Digits vs Letters
function digitsOrLetters(str) {
    let digitsCount = 0;
    let lettersCount = 0;

    for (const c of str) {
        if (/\d/.test(c)) {
            digitsCount++;
        } else if (/[a-z]/i.test(c)) {
            lettersCount++;
        }
    }

    return digitsCount > lettersCount ? 'digits' : digitsCount < lettersCount ? 'letters' : 'tie';
}