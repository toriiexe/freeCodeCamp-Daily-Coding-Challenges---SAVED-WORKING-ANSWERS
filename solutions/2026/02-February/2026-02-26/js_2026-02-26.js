// JavaScript solution for 2026-02-26
// Letter and Number Count
function countLettersAndNumbers(str) {
    const lettersQuantity = (str.match(/[a-zA-Z]/g) || []).length;
    const lettersStr = lettersQuantity !== 1 ? 'letters' : 'letter';

    const numbersQuantity = (str.match(/[0-9]/g) || []).length;
    const numbersStr = numbersQuantity !== 1 ? 'numbers' : 'number';

    return `The string has ${lettersQuantity} ${lettersStr} and ${numbersQuantity} ${numbersStr}.`;
}