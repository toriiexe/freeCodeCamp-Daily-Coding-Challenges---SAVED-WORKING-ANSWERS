// JavaScript solution for 2026-06-30
// Duplicate Character Count
function duplicateCharacterCount(str1, str2) {
    const unique = new Set(str1);
    let count = 0;

    for (const char of str2) {
        if (unique.has(char)) {
        count++;
        }
    }

    return count;
}