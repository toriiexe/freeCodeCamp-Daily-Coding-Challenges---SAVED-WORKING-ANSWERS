// JavaScript solution for 2026-05-14
// Mirror Image
function isMirrorImage(str1, str2) {
    const symmetricChars = 'WTYUIOHAXVMwoxv08=+:|-_*^!. ';
    const swaps = {
        '[': ']', ']': '[',
        '{': '}', '}': '{',
        '<': '>', '>': '<',
        'b': 'd', 'd': 'b',
        'p': 'q', 'q': 'p',
        '(': ')', ')': '('
    };

    if (str1.length !== str2.length) {
        return false;
    }

    const str2Reversed = str2.split('').reverse().join('');

    for (let i = 0; i < str1.length; i++) {
        if (!symmetricChars.includes(str1[i]) && !(str1[i] in swaps)) {
        return false;
        }

        if (str1[i] in swaps) {
        if (swaps[str1[i]] !== str2Reversed[i]) {
            return false;
        }
        } 
        else {
        if (str1[i] !== str2Reversed[i]) {
            return false;
        }
        }
    }

    return true;
}