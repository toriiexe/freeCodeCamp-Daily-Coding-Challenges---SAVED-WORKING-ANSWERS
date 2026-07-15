// JavaScript solution for 2026-01-14
// Markdown Link Parser
function parseLink(markdown) {
    let [text, href] = markdown.split('](');
    text = text.slice(1);
    href = href.slice(0, -1);
    return `<a href="${href}">${text}</a>`;
}