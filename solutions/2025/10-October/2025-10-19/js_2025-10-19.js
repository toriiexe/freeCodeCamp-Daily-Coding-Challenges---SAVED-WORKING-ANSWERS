// JavaScript solution for 2025-10-19
// HTML Attribute Extractor
function extractAttributes(element) {
    const matches = [...element.matchAll(/([a-z]+)="([^"]*)"/g)];

    return matches.map(match => `${match[1]}, ${match[2]}`);
}