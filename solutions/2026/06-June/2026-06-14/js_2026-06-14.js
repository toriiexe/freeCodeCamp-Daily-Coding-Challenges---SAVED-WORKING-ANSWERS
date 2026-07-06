// JavaScript solution for 2026-06-14
// Credit Card Validator
function isValidCard(number) {
    const num = number.split('').reverse().join('');
    let s = 0;

    for (let i = 0; i < num.length; i++){
        let digit = Number(num[i]);

        if (i % 2 == 1){
        digit *= 2;
        if (digit > 9){
            digit -= 9;
        }
        }

        s += digit;
    }

    return s % 10 === 0;
}