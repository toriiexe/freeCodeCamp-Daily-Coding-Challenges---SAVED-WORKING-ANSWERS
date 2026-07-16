// JavaScript solution for 2025-11-10
// Extension Extractor
function getExtension(filename) {
    const parts = filename.split('.');

    if (parts.length === 1 || filename[filename.length - 1] === '.') {
        return "none";
    }

    return parts[parts.length - 1];
}