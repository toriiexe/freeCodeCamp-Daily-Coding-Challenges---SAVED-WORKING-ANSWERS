// JavaScript solution for 2026-07-18
// Dice Odds
function getOdds(dice, target) {
    let dp = Array(6 * dice + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < dice; i++) {
        let newDp = Array(6 * dice + 1).fill(0);

        for (let sum = 0; sum < dp.length; sum++) {
            if (dp[sum] > 0) {
                for (let roll = 1; roll <= 6; roll++) {
                    if (sum + roll < newDp.length) {
                        newDp[sum + roll] += dp[sum];
                    }
                }
            }
        }

        dp = newDp;
    }

    const favorable = dp[target];
    const total = 6 ** dice;

    const x = Math.round(total / favorable);

    return `1 in ${x}`;
}