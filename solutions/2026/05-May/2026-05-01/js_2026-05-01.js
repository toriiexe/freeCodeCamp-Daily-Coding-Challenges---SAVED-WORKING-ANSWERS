// JavaScript solution for 2026-05-01
// Anagram Groups
function groupAnagrams(words) {
    const groups = {};

    for (const word of words) {
        const key = word.split('').sort().join('');

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(word);
    }

    return Object.values(groups);
}