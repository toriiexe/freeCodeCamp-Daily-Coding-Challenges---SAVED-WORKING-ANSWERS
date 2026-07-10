// JavaScript solution for 2025-09-08
// Acronym Builder
function buildAcronym(str) {
    const forbidden = new Set(["a", "for", "an", "and", "by", "of"]);

    let acronym = "";

    for (const [i, word] of str.split(' ').entries()) {
        if (i === 0 || !forbidden.has(word.toLowerCase())) {
            acronym += word[0].toUpperCase();
        }
    }

    return acronym;
}