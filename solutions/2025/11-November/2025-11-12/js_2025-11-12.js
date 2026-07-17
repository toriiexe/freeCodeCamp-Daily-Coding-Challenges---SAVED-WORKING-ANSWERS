// JavaScript solution for 2025-11-12
// Email Signature Generator
function generateSignature(name, title, company) {
    let prefix = '';

    const firstLetter = name[0].toUpperCase();

    if ('A' <= firstLetter && firstLetter <= 'I') {
        prefix = '>>';
    } else if ('J' <= firstLetter && firstLetter <= 'R') {
        prefix = '--';
    } else if ('S' <= firstLetter && firstLetter <= 'Z') {
        prefix = '::';
    }

    return `${prefix}${name}, ${title} at ${company}`;
}