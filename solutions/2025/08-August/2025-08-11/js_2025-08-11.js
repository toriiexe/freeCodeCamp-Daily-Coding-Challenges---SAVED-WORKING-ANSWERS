// JavaScript solution for 2025-08-11
// Vowel Balance
function isBalanced(s) {
    let fHalf = 0;
    let sHalf = 0;
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < s.length / 2; i++) {
        if (vowels.includes(s[i])) {
        fHalf++;
        }

        if (vowels.includes(s[s.length - i - 1])) {
        sHalf++;
        }
    }

    return fHalf === sHalf;
}