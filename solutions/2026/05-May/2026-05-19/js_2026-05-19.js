// JavaScript solution for 2026-05-19
// Sleep Debt
function getSum(total, num) {
    return total + num;
}

    function sleepDebt(hoursSlept, targetHours) {
    const debt = (hoursSlept.length + 1) * targetHours - hoursSlept.reduce(getSum, 0);
    return Math.max(debt, 0);
}