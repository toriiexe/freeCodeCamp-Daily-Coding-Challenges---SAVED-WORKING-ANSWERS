// JavaScript solution for 2025-12-22
// Traveling Shopper
function buyItems(funds, items) {
    const rates = {
        USD: 1.00,
        EUR: 1.10,
        GBP: 1.25,
        JPY: 0.0070,
        CAD: 0.75
    };

    let budget = parseFloat(funds[0]) * rates[funds[1]];

    for (let i = 0; i < items.length; i++) {
        const [price, currency] = items[i];
        budget -= parseFloat(price) * rates[currency];

        if (budget < 0) {
            return `Buy the first ${i} items.`;
        }
    }

    return 'Buy them all!';
}