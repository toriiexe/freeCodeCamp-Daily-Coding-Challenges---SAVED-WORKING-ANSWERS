// JavaScript solution for 2026-02-04
// Truncate the Text
function truncateText(text) {
    if (text.length <= 20) return text;
    return text.slice(0,17) + '...';
}