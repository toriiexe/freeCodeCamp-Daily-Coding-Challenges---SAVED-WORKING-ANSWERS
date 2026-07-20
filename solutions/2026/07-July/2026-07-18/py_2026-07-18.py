# Python solution for 2026-07-18
# Dice Odds
def get_odds(dice, target):
    dp = [0] * (6 * dice + 1)
    dp[0] = 1

    for _ in range(dice):
        new_dp = [0] * (6 * dice + 1)

        for s in range(len(dp)):
            if dp[s]:
                for roll in range(1, 7):
                    if s + roll < len(new_dp):
                        new_dp[s + roll] += dp[s]

        dp = new_dp

    favorable = dp[target]
    total = 6 ** dice

    x = round(total / favorable)

    return f'1 in {x}'