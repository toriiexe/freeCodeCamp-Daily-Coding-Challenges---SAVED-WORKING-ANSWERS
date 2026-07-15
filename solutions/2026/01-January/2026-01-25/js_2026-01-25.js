// JavaScript solution for 2026-01-25
// Scaled Image
function scaleImage(size, scale) {
    const [w, h] = size.split('x').map(Number);
    return `${Math.round(w * scale)}x${Math.round(h * scale)}`;
}