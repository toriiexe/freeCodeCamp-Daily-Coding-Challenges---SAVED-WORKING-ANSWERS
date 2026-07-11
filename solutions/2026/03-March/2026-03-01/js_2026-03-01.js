// JavaScript solution for 2026-03-01
// Flattened
function isFlat(arr) {
    for (const el of arr) {
        if (Array.isArray(el)) {
            return false;
        }
    }
    return true;
}