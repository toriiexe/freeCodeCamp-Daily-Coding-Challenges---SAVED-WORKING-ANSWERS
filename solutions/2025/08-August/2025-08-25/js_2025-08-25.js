// JavaScript solution for 2025-08-25
// camelCase
function toCamelCase(s) {
    return s.toLowerCase().replace(/[\s_-]+(.)/g, (_, char) => char.toUpperCase());
}