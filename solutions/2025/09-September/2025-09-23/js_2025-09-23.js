// JavaScript solution for 2025-09-23
// String Mirror
function isMirror(str1, str2) {
    let clean1 = '';
    let clean2 = '';

    for (const c of str1) {
        if (/[a-zA-Z]/.test(c)) {
            clean1 += c;
        }
    }

    for (const c of str2) {
        if (/[a-zA-Z]/.test(c)) {
            clean2 += c;
        }
    }

    return clean1 === [...clean2].reverse().join('');
}