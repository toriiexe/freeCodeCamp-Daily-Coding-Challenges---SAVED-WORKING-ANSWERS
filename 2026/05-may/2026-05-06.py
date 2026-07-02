#Allergen Friendly Meals
def get_allergen_friendly_meals(meals, allergens):
    safeMeals = []

    for meal, mealAllergens in meals:
        notSafe = False

        for mealAllergen in mealAllergens:
            if mealAllergen in allergens:
                notSafe = True
                break

        if not notSafe:
            safeMeals.append(meal)

    return safeMeals