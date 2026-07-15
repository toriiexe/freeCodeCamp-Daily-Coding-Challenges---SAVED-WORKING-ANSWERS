// JavaScript solution for 2025-12-07
// String Compression
function compressString(sentence) {
    let words = [];
    let res = '';

    for (let w of sentence.split(' ')) {
        if (words.length === 0) {
            words.push(w);
            continue;
        }

        if (w === words[0]) {
            words.push(w);
        } else {
            if (words.length > 1) {
                res += `${words[0]}(${words.length}) `;
            } else {
                res += `${words[0]} `;
            }
            words = [w];
        }
    }

    if (words.length > 1) {
        res += `${words[0]}(${words.length})`;
    } else {
        res += words[0];
    }

    return res;
}