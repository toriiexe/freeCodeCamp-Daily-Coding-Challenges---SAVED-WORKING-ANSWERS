// JavaScript solution for 2025-09-30
// Phone Number Formatter
function formatNumber(number) {
    /*
    if (!/^\d{11}$/.test(number)) {
            return "Invalid number";
        }
    */
   
    return `+${number[0]} (${number.slice(1,4)}) ${number.slice(4,7)}-${number.slice(7)}`;
}