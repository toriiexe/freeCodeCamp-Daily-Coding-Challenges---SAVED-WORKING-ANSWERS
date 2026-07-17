// JavaScript solution for 2025-11-21
// LCM
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

function lcm(a, b) {

  return (a * b)/gcd(a, b);
}