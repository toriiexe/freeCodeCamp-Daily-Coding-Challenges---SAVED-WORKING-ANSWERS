// JavaScript solution for 2025-09-04
// Vowel Repeater
function repeatVowels(str) {
    let res = '';
    let vowelsToRepeat = 0;

    for (const c of str) {
        if ('AEIOUaeiou'.includes(c)) {
        res += c + c.toLowerCase().repeat(vowelsToRepeat);
        vowelsToRepeat++;
        } else {
        res += c;
        }
    }

    return res;
}