// JavaScript solution for 2026-04-14
// Last Letter
function getLastLetter(str) {
    let lastLetter = '';

    for (const c of str) {
        if (/[a-z]/i.test(c)) {
            if (lastLetter.toLowerCase() < c.toLowerCase()) {
                lastLetter = c;
            }
        }
    }

    return lastLetter;
}