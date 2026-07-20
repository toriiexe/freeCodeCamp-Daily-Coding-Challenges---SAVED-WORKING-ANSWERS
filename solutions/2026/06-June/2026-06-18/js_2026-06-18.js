// JavaScript solution for 2026-06-18
// Streaming Cost
function getStreamingBill(cart, subscription) {
    const costRent = {
        HD: 3.99,
        "4K": 5.99
    };

    const costBuy = {
        HD: 12.99,
        "4K": 19.99
    };

    const subs = {
        none: 1,
        basic: 0.9,    // 10% off
        premium: 0.75  // 25% off
    };

    let total = 0;

    for (const item of cart) {
        if (item.type === "rent") {
            total += costRent[item.format];
        } else if (item.type === "buy") {
            total += costBuy[item.format];
        }
    }

    total *= subs[subscription];

    return `$${total.toFixed(2)}`;
}