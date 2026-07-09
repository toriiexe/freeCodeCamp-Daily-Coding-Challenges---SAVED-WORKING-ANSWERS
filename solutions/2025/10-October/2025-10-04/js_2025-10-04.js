// JavaScript solution for 2025-10-04
// Stellar Classification
function classification(temp) {
    if (temp >= 30_000){
        return 'O';
    } else if (temp >= 10_000){
        return 'B';
    } else if (temp >= 7_500){
        return 'A';
    } else if (temp >= 6_000){
        return 'F';
    } else if (temp >= 5_200){
        return 'G';
    } else if (temp >= 3_700){
        return 'K';
    } else if (temp >= 0){
        return 'M';
    }
}