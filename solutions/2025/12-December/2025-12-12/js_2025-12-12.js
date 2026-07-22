// JavaScript solution for 2025-12-12
// Inventory Update
function updateInventory(inventory, shipment) {
    const eq = {};

    for (const inv of inventory) {
        eq[inv[1]] = inv[0];
    }

    for (const s of shipment) {
        if (!(s[1] in eq)) {
            eq[s[1]] = s[0];
        } else {
            eq[s[1]] += s[0];
        }
    }

    const res = [];

    for (const key in eq) {
        res.push([eq[key], key]);
    }

    return res;
}