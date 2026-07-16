// JavaScript solution for 2025-08-29
// Candlelight
function burnCandles(candles, leftoversNeeded) {
    let burned = 0;
    let leftovers = 0;
    let current = candles;

    while (current > 0) {
        burned += current;
        leftovers += current;

        current = Math.floor(leftovers / leftoversNeeded);
        leftovers = leftovers % leftoversNeeded;
    }

    return burned;
}