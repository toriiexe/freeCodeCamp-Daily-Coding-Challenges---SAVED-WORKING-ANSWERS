# Python solution for 2026-07-02
#Max Profit
def get_max_profit(prices, budget):
    profit = 0
    
    for i, buy in enumerate(prices):
        shares = int(budget // buy)
        
        for j in range(i + 1, len(prices)):
            sell = prices[j]
            possible = shares * (sell - buy)
            
            if possible > profit:
                profit = possible

    return f"{profit:.2f}"