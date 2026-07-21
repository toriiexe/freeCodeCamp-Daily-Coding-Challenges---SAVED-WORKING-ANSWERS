// JavaScript solution for 2025-12-17
// Markdown Blockquote Parser
function parseBlockquote(markdown) {
    return markdown.replace(/\s*>\s+(.*)/, '<blockquote>$1</blockquote>');
}