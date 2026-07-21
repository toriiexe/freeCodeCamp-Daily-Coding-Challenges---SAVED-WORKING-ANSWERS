// JavaScript solution for 2025-12-31
// Markdown Italic Parser
function parseItalics(markdown) {
    return markdown.replace(/([*_])(\S(?:.*?\S)?)\1/g, '<i>$2</i>');
}