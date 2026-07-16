// JavaScript solution for 2026-07-16
// Pig Latin Converter
function pigLatin(str) {
    if (typeof str !== 'string') {
        return null;
    }

    if (str.split(' ').some(word => !/^[a-zA-Z]+$/.test(word))) {
        return null;
    }

    const vowels = 'aeiou';
    let res = [];

    for (let word of str.split(' ')) {
        let to_capitalize = word[0] === word[0].toUpperCase();

        let w = word.toLowerCase();

        if (vowels.includes(w[0])) {
            if (to_capitalize) {
                res.push((w + 'way')[0].toUpperCase() + (w + 'way').slice(1));
            } else {
                res.push(w + 'way');
            }
        } else {
            for (let i = 0; i < w.length; i++) {
                if (vowels.includes(w[i])) {
                    let pig = w.slice(i) + w.slice(0, i) + 'ay';

                    if (to_capitalize) {
                        pig = pig[0].toUpperCase() + pig.slice(1);
                    }

                    res.push(pig);
                    break;
                }
            }
        }
    }

    return res.join(' ');
}