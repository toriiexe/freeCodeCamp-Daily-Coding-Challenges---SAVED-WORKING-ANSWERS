// JavaScript solution for 2026-07-24
// Loan Calculator
function getLoanSchedule(loanAmount, annualRate, monthlyPayment) {
    const res = [loanAmount];
    const monthlyRate = (annualRate / 100) / 12;

    while (loanAmount > 0) {
        const interest = loanAmount * monthlyRate;
        loanAmount = Math.max(0, loanAmount + interest - monthlyPayment);
        res.push(Math.round(loanAmount));
    }

    return res;
}