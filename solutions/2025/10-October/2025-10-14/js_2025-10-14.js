// JavaScript solution for 2025-10-14
// String Count
function count(text, pattern) {
    let count = 0;

    const textLen = text.length;
    const patternLen = pattern.length;

    if (textLen >= patternLen) {
        for (let i = 0; i <= textLen - patternLen; i++) {
        if (text.slice(i, i + patternLen) === pattern) {
            count++;
        }
        }
    }

    return count;
}