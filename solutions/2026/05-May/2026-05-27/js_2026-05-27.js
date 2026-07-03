// JavaScript solution for 2026-05-27
// Pizza Party
function getPizzasToOrder(hoursWorked) {
    let slices = 0;

    for (const hours of hoursWorked) {
        const willGet = Math.ceil(hours / 3);
        slices += Math.max(willGet, 2);
    }

    return Math.ceil(slices / 8);
}