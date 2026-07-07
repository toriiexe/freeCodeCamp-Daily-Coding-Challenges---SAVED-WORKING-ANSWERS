// JavaScript solution for 2025-12-30
// Sum the String
function stringSum(str) {
    let res = 0;
    let temp = "";

    for (const c of str) {
        if (c >= "0" && c <= "9") {
        temp += c;
        } else if (temp) {
        res += Number(temp);
        temp = "";
        }
    }

    if (temp) {
        res += Number(temp);
    }

    return res;
}