// JavaScript solution for 2026-03-22
//  Coffee Roast Detector
function detectRoast(beans) {
    let totalPoints = 0;

    for (const bean of beans) {
        if (bean === "'") {
            totalPoints += 1;
        } else if (bean === "-") {
            totalPoints += 2;
        } else if (bean === ".") {
            totalPoints += 3;
        }
    }

    const average = totalPoints / beans.length;

    if (average < 1.75) {
        return "Light";
    } else if (average <= 2.5) {
        return "Medium";
    } else {
        return "Dark";
    }
}