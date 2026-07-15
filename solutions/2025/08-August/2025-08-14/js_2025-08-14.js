// JavaScript solution for 2025-08-14
// S P A C E J A M
function spaceJam(s) {
    s = s.replaceAll(' ', '');
    let res = '';

    for (const c of s) {
        res += c.toUpperCase() + '  ';
    }

    return res.trimEnd();
}


/*
// S P A C E J A M - SHORTER VERSION
function spaceJam(s) {
    return s.replaceAll(' ', '').toUpperCase().split('').join('  ');
}
*/
