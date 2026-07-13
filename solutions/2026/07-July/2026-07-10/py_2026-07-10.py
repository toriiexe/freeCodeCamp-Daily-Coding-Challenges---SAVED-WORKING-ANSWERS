# Python solution for 2026-07-10
# Exact Change
def exact_change(amount):
    coins = [1, 5, 10, 25]

    dp = [0] * (amount + 1)
    dp[0] = 1

    for coin in coins:
        for i in range(coin, amount+1):
            dp[i] += dp[i-coin]

    return dp[amount]