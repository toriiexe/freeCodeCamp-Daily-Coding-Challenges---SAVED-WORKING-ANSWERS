// JavaScript solution for 2025-12-08
// Pounds to Kilograms
function convertToKgs(lbs) {
    const kgs = lbs * 0.453592;

    const lbsStr = lbs === 1 ? 'pound' : 'pounds';
    const kgsStr = Math.round(kgs * 100) / 100 === 1 ? 'kilogram' : 'kilograms';

    return `${lbs} ${lbsStr} equals ${kgs.toFixed(2)} ${kgsStr}.`;
}