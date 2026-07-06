// JavaScript solution for 2026-06-01
// Schema Validator Part 1
function isValidSchema(obj) {
    for (const [key, value] of Object.entries(obj)) {
        if (key === "username") {
        return typeof value === "string";
        }
    }
    return false;
}