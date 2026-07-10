// JavaScript solution for 2025-09-17
// Slug Generator
function generateSlug(str) {
    const s = str.trim().replace(/\s+/g, ' ');
    let res = '';

    for (const c of s) {
        if (('0' <= c && c <= '9') || /[a-z]/i.test(c)) {
            res += c.toLowerCase();
        } else if (c === ' ') {
            res += '%20';
        }
    }

    return res;
}