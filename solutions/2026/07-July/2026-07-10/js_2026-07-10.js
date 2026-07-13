// JavaScript solution for 2026-07-10
// Exact Change
function exactChange(amount) {
    const coins = [1, 5, 10, 25];

    const dp = [];
    
    for (let i = 0; i <= amount; i++){
        dp.push(0);
    }
    //^^ or
    // const dp = new Array(amount + 1).fill(0);

    dp[0] = 1;

    for (const coin of coins){
        for (let i = coin; i <= amount; i++){
        dp[i] += dp[i-coin];
        }
    }


    return dp[amount];
}