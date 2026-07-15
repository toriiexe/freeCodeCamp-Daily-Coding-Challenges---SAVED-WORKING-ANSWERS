// JavaScript solution for 2026-04-19
// Unique Stair Climber
function getUniqueClimbs(steps) {
    const dp = new Array(steps + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= steps; i++) {
        dp[i] += dp[i - 1];

        if (i >= 2) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[steps];
}