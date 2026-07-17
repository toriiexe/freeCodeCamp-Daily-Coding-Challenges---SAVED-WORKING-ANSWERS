# Python solution for 2025-11-22
# Recipe Scaler
def scale_recipe(ingredients, scale):
    res = []

    for ingredient in ingredients:
        quantity, unit, name = ingredient.split(' ', 2)

        quantity = float(quantity) * scale

        res.append(f'{quantity:g} {unit} {name}')

    return res