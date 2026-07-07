// JavaScript solution for 2025-12-14
// Capitalize It
function titleCase(title) {
    let res = [];
    for (const word of title.split(' ')){
        if (!word) {
        res.push('');
        continue;
        }
        res.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
    return res.join(' ');
}