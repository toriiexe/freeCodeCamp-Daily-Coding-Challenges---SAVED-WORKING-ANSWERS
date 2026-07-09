// JavaScript solution for 2025-11-18
// 100 Characters
function oneHundred(chars) {
    let res = '';
    while (res.length < 100){
        res += chars[res.length % chars.length]
    }
    return res;
}