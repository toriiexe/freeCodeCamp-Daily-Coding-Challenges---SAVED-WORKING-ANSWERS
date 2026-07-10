// JavaScript solution for 2025-10-20
// Tip Calculator
function calculateTips(mealPrice, customTip) {
    const price = Number(mealPrice.slice(1));
    const custTip = Number(customTip.slice(0, -1)) / 100;

    return [`\$${(price * 0.15).toFixed(2)}`, `\$${(price * 0.2).toFixed(2)}`, `\$${(price * custTip).toFixed(2)}`];
}