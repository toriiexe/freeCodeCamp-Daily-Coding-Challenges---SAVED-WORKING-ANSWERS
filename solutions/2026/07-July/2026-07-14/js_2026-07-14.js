// JavaScript solution for 2026-07-14
// Pet Age Calculator
function petYears(pet, age) {
    const multiplier = {
        'dog': 7,
        'cat': 6,
        'rabbit': 8,
        'hamster': 30,
        'guinea pig': 12,
        'goldfish': 6,
        'bird': 5
    }

    return age * multiplier[pet];
}