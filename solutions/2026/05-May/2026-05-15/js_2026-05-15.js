// JavaScript solution for 2026-05-15
// Coffee Order Parser
function formatCoffeeOrder(order) {
    const menu = [
            ["cold brew", 4.50],
            ["oat latte", 5.00],
            ["cappuccino", 4.75],
            ["espresso", 3.00],
            ["vanilla syrup", 0.75],
            ["caramel drizzle", 0.60],
            ["extra shot", 0.50],
            ["oat milk", 0.75],
            ["cream", 0.75],
        ];

    order = order.toLowerCase();

    const items = [];
    let total = 0;

    for (const [name, price] of menu) {
        if (order.includes(name)) {
            items.push(name);
            total += price;
        }
    }

    return `${items.join(" + ")}: $${total.toFixed(2)}`;
}