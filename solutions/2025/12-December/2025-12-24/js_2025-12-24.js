// JavaScript solution for 2025-12-24
// Markdown Image Parser
function parseImage(markdown) {
    return markdown.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');
}