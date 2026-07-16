// JavaScript solution for 2025-10-15
// HTML Tag Stripper
function stripTags(html) {
    return html.replace(/<[^>]*>/g, '');
}