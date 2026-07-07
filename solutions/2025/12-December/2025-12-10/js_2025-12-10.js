// JavaScript solution for 2025-12-10
// Markdown Bold Parser
function parseBold(markdown) {
    return markdown.replace(/\*\*(\S(?:.*?\S)?)\*\*|__(\S(?:.*?\S)?)__/g, (match, group1, group2) => `<b>${group1 || group2}</b>`);
}