// JavaScript solution for 2025-09-14
// Word Frequency
function getWords(paragraph) {
    const p = paragraph.toLowerCase().replaceAll(',', '').replaceAll('.', '').replaceAll('!', '');

    const d = {};

    for (const word of p.split(' ')) {
        if (word in d) {
            d[word] += 1;
        } else {
            d[word] = 1;
        }
    }

    const desc = Object.entries(d).sort((a, b) => b[1] - a[1]);

    return desc.slice(0, 3).map(([word, count]) => word);
}