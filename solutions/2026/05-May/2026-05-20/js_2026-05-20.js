// JavaScript solution for 2026-05-20
// String Zipper
function zipStrings(a, b) {
    let result = "";
    const minLength = Math.min(a.length, b.length);

    for (let i = 0; i < minLength; i++){
        result += a[i] + b[i];
    }

    return result + a.substring(minLength) + b.substring(minLength);
}