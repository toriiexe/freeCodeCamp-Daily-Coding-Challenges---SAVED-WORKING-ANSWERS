// JavaScript solution for 2025-08-31
// Hex Generator
function generateHex(color) {
    if (!['red', 'green', 'blue'].includes(color)) {
        return 'Invalid color';
    }

    const dominant = Math.floor(Math.random() * (255 - 128 + 1)) + 128;

    let r, g, b;

    if (color === 'red') {
        r = dominant;
        g = Math.floor(Math.random() * dominant);
        b = Math.floor(Math.random() * dominant);

    } else if (color === 'green') {
        g = dominant;
        r = Math.floor(Math.random() * dominant);
        b = Math.floor(Math.random() * dominant);

    } else {
        // blue
        b = dominant;
        r = Math.floor(Math.random() * dominant);
        g = Math.floor(Math.random() * dominant);
    }

    return `${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();
}