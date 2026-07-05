// JavaScript solution for 2026-05-12
// Character Frequency
function getFrequency(str) {
    const freq = {};

    for (const c of str) {
        freq[c] = (freq[c] || 0) + 1;
    }

    return freq;
}