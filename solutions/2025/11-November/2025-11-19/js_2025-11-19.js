// JavaScript solution for 2025-11-19
// Markdown Heading Converter
function convert(heading) {
    const match = heading.match(/^\s*(#{1,6})\s+(.+)$/);

    if (!match) {
        return 'Invalid format';
    }

    const level = match[1].length;
    const text = match[2];

    return `<h${level}>${text}</h${level}>`;
}