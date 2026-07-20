// JavaScript solution for 2026-01-07
// Markdown Unordered List Parser
function parseUnorderedList(markdown) {
    const items = markdown.replace(/-\s+(.+?)(?:\n|$)/g, '<li>$1</li>');
    return '<ul>' + items + '</ul>';
}