// JavaScript solution for 2026-04-17
// Hidden Key
function decode(message) {
    const key = 'VLHCGMDLNH';
    let res = '';
    let j = 0;

    for (const ch of message) {
        if (ch === ' ') {
            res += ' ';
            continue;
        }

        const shift = key.charCodeAt(j % key.length) - 'A'.charCodeAt(0) + 1;
        res += String.fromCharCode((ch.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26 + 'A'.charCodeAt(0));
        j++;
    }

    return res;
}