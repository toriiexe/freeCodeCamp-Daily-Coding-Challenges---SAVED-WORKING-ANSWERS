// JavaScript solution for 2025-11-22
// Recipe Scaler
function scaleRecipe(ingredients, scale) {
    const res = [];

    for (const ingredient of ingredients) {
        let [quantity, unit, ...name] = ingredient.split(' ');

        quantity = (Number(quantity) * scale).toString();

        res.push(`${quantity} ${unit} ${name.join(' ')}`);
    }

    return res;
}