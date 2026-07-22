// JavaScript solution for 2026-07-22
// Piggy Bank
function piggyBank(coins) {
    const values = {
        pennies: 1,
        nickels: 5,
        dimes: 10,
        quarters: 25
    };

    let total = 0;

    for (const coin in coins) {
        total += values[coin] * coins[coin];
    }

    return `$${Math.floor(total / 100)}.${String(total % 100).padStart(2, '0')}`;
}