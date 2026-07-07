// JavaScript solution for 2025-12-03
// Markdown Ordered List Item Converter
function convertListItem(markdown) {
    const match = markdown.match(/^\s*([1-9]\d*)\.\s+(.+)$/);

    if (match) return `<li>${match[2]}</li>`;
    return "Invalid format";
}