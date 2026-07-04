// JavaScript solution for 2026-07-01
// Lucky Number
function getLuckyNumber(name) {
    const [firstName, lastName] = name.toLowerCase().split(" ");

    let fnV = 0;
    let fnC = 0;

    for (const ch of firstName){
        if ('aeiou'.includes(ch)){
        fnV++;
        }
        else if (ch >= 'a' && ch <= 'z'){
        fnC++;
        }
    }

    let lnV = 0;
    let lnC = 0;

    for (const ch of lastName){
        if ('aeiou'.includes(ch)){
        lnV++;
        }
        else if (ch >= 'a' && ch <= 'z'){
        lnC++;
        }
    }

    let smallerV = Math.min(fnV, lnV) * Math.min(fnC, lnC) * Math.min(firstName.length, lastName.length)

    let largerV = Math.max(fnV, lnV) * Math.max(fnC, lnC) * Math.max(firstName.length, lastName.length)

    const result = largerV - smallerV;
    return result || 13;
}