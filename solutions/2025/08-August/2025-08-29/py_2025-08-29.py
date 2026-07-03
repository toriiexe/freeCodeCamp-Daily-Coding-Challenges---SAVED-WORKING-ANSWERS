# Python solution for 2025-08-29
#Candlelight
def burn_candles(candles, leftovers_needed):
    burned = 0
    leftovers = 0
    current = candles

    while current > 0:
        burned += current
        leftovers += current

        current = leftovers // leftovers_needed
        leftovers = leftovers % leftovers_needed

    return burned