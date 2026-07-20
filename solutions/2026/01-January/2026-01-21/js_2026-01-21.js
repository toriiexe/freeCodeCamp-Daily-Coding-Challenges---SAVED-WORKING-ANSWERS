// JavaScript solution for 2026-01-21
// Markdown Inline Code Parser
function parseInlineCode(markdown) {
    return markdown.replace(/`(.+?)`/g, '<code>$1</code>');
}