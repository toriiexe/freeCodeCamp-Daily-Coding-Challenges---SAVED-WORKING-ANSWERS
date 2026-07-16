// JavaScript solution for 2025-08-22
// Message Decoder
function decode(message, shift) {
    const alphaU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphaL = 'abcdefghijklmnopqrstuvwxyz';
    let s = '';

    for (const c of message) {
        if (alphaU.includes(c)) {
            s += alphaU[(alphaU.indexOf(c) - shift + 26) % 26];
        } else if (alphaL.includes(c)) {
            s += alphaL[(alphaL.indexOf(c) - shift + 26) % 26];
        } else {
            s += c;
        }
    }

    return s;
}