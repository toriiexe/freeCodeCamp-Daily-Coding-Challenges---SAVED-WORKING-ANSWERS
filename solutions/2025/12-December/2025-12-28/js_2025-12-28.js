// JavaScript solution for 2025-12-28
// SCREAMING_SNAKE_CASE
function toScreamingSnakeCase(variableName) {
    variableName = variableName.replace(/-/g, "_");
    variableName = variableName.replace(/(?!^)([A-Z])/g, "_$1");
    return variableName.toUpperCase();
}