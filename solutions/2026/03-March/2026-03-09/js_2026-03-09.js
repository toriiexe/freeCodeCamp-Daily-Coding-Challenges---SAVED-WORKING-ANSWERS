// JavaScript solution for 2026-03-09
// Array Sum
function sumArray(numbers) {
    let total = 0;

    for (const num of numbers){
        total += num;
    }
    
    return total;
}

/*
// Array Sum - SHORTER VERSION
function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
*/