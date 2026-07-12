// JavaScript solution for 2026-02-05
// Pocket Change
function countChange(change) {
    const total = change.reduce((sum, coin) => sum + coin, 0);
    return `\$${Math.floor(total / 100)}.${String(total % 100).padStart(2, "0")}`;
}