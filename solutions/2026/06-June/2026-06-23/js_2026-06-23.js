// JavaScript solution for 2026-06-23
// BMI Calculator
function calculateBmi(weight, height) {
    return Math.round((weight / Math.pow(height, 2) * 703) * 10) / 10;
}