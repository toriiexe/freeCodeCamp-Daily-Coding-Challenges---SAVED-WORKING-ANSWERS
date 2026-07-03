// JavaScript solution for 2026-05-28
// FizzBuzz Count
function fizzBuzzCount(start, end) {
    let d = {'fizz': 0, 'buzz': 0};
    for (let i = start; i <= end; i++){
        if (i % 15 === 0){
            d['fizz'] += 1;
            d['buzz'] += 1;
        }
        else if (i % 3 === 0){
            d['fizz'] += 1;
        }
        else if (i % 5 === 0){
            d['buzz'] += 1;
        }
    }
    return d;
}