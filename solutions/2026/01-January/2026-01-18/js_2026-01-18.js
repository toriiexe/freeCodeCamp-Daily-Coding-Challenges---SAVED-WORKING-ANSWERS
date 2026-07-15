// JavaScript solution for 2026-01-18
// Free Shipping
function getsFreeShipping(cart, minimum) {
    const items = {
        shirt: 34.25,
        jeans: 48.50,
        shoes: 75.00,
        hat: 19.95,
        socks: 15.00,
        jacket: 109.95
    };
    
    const total = cart.reduce((sum, item) => sum + items[item], 0);

    return total >= minimum;
}