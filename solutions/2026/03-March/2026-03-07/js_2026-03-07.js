// JavaScript solution for 2026-03-07
// Element Size
function getElementSize(windowSize, elementVw, elementVh) {
    const [w, h] = windowSize.split(" x ").map(Number);

    const vW = Number(elementVw.slice(0, -2));
    const vH = Number(elementVh.slice(0, -2));

    return `${Math.floor(w * vW / 100)} x ${Math.floor(h * vH / 100)}`;
}