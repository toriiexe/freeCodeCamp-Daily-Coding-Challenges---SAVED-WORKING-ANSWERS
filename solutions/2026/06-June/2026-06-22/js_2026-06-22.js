// JavaScript solution for 2026-06-22
// 1337 Speak
function makeLeet(str) {
    const subs = {
        'a': '4',
        'e': '3',
        'g': '9',
        'i': '1',
        'l': '1',
        'o': '0',
        's': '5',
        't': '7'
    }

    let res = '';

    for (const c of str) {
        if (c in subs) {
        res += subs[c];
        } else {
        res += c;
        }
    }

    return res;
}