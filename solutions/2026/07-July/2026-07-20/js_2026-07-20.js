// JavaScript solution for 2026-07-20
// Golden Ratio
function isGoldenRatio(a, b) {
    const goldenRatio = 1.618;
    const tolerance = 0.01;

    const ratio = Math.max(a, b) / Math.min(a, b);

    return ratio - tolerance <= goldenRatio && goldenRatio <= ratio + tolerance;
}