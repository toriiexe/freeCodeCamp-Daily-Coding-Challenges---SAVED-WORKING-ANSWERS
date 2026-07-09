// JavaScript solution for 2025-11-15
// GCD
function gcd(x, y) {
    const lowest = Math.min(x,y);
    let hcf = 1;

    for (let i = 1; i <= lowest; i++){
        if (x % i == 0 && y % i == 0){
        hcf = i;
        }
    }
    
    return hcf;
}