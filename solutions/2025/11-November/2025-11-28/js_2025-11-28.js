// JavaScript solution for 2025-11-28
// Word Guesser
function compare(word, guess) {
    const d = new Map();

    for (let i = 0; i < 26; i++) {
        d.set(String.fromCharCode(65 + i), 0);
    }

    for (const c of word) {
        d.set(c, d.get(c) + 1);
    }

    const res = Array(word.length).fill('0');

    for (let i = 0; i < guess.length; i++) {
        const ch = guess[i];

        if (ch === word[i]) {
            res[i] = '2';
            d.set(ch, d.get(ch) - 1);
        }
    }

    for (let i = 0; i < guess.length; i++) {
        const ch = guess[i];

        if (res[i] === '0' && d.get(ch) > 0) {
            res[i] = '1';
            d.set(ch, d.get(ch) - 1);
        }
    }

    return res.join('');
}