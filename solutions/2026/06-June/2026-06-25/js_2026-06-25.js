// JavaScript solution for 2026-06-25
// Frontmatter Parser

function parseFrontmatter(str) {
    const result = {};

    for (const line of str.split("\n").slice(1, -1)) {
        const [key, ...rest] = line.split(": ");
        let value = rest.join(": ");

        if (value === "true") {
        value = true;
        } else if (value === "false") {
        value = false;
        } else if (!isNaN(value)) {
        value = value.includes(".") ? parseFloat(value) : parseInt(value, 10);
        }

        result[key] = value;
    }

    return result;
}