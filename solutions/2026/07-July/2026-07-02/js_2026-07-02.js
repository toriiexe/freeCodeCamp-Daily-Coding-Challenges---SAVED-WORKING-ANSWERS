// JavaScript solution for 2026-07-02
// Max Profit
function getMaxProfit(prices, budget) {
    let profit = 0;

    for (const [i, buy] of prices.entries()) {
        const shares = Math.floor(budget / buy);

        for (let j = i + 1; j < prices.length; j++) {
        const sell = prices[j];
        const possible = shares * (sell - buy);

        if (possible > profit) {
            profit = possible;
        }
        }
    }

    return profit.toFixed(2);
}