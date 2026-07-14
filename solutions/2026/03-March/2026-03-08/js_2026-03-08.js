// JavaScript solution for 2026-03-08
// HSL Validator
function isValidHSL(hsl) {
    const pattern = /^hsl\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*;?$/;

    const matched = hsl.match(pattern);

    if (!matched) {
        return false;
    }

    const h = Number(matched[1]);
    const s = Number(matched[2]);
    const l = Number(matched[3]);

    return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}