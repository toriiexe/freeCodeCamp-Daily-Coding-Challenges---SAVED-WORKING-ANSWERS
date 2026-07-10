// JavaScript solution for 2025-09-16
// Sentence Capitalizer
function capitalize(paragraph) {
    let res = '';
    let bigLetter = true;

    for (const c of paragraph) {
        if (bigLetter && /[a-z]/i.test(c)) {
            res += c.toUpperCase();
            bigLetter = false;
        } else {
            res += c;
        }

        if ('.?!'.includes(c)) {
            bigLetter = true;
        }
    }

    return res;
}