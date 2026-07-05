// JavaScript solution for 2026-05-06
// Allergen Friendly Meals
function getAllergenFriendlyMeals(meals, allergens) {
    let safeMeals = [];

    for (const [meal, mealAllergens] of meals){
        let notSafe = false;

        for (const mealAllergen of mealAllergens){
        if (allergens.includes(mealAllergen)){
            notSafe = true;
            break;
        }
        }
        if (!(notSafe)){
        safeMeals.push(meal);
        }
    }
    return safeMeals;
}