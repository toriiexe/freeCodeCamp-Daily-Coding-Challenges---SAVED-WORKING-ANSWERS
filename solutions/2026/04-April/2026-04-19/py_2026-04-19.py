# Python solution for 2026-04-19
# Unique Stair Climber
def get_unique_climbs(steps):
    dp = [0] * (steps + 1)
    dp[0] = 1

    for i in range(1, steps + 1):
        dp[i] += dp[i - 1]

        if i >= 2:
            dp[i] += dp[i - 2]

    return dp[steps]


"""
def get_unique_climbs(steps):
    if steps == 0:
        return 1
    if steps == 1:
        return 1

    dp = [0] * (steps + 1)
    dp[0] = 1
    dp[1] = 1

    for i in range(2, steps + 1):
        dp[i] = dp[i - 1] + dp[i - 2]

    return dp[steps]
"""