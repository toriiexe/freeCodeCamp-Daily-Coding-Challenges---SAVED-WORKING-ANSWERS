// JavaScript solution for 2026-02-02
// Groundhog Day
function groundhogDayPrediction(appearance) {
    if (typeof appearance === "boolean") {
        if (appearance) {
            return "Looks like we'll have six more weeks of winter.";
        } else {
            return "It's going to be an early spring.";
        }
    }
    return "No prediction this year.";
}