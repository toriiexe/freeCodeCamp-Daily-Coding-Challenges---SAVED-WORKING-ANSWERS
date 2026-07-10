// JavaScript solution for 2025-09-02
// RGB to Hex
function rgbToHex(rgb) {
    rgb = rgb.replace('rgb(', '').replace(')', '');
    let [r, g, b] = rgb.split(', ');

    return `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`;
}