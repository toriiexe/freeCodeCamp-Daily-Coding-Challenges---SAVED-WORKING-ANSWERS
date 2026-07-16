// JavaScript solution for 2025-08-20
// 3 Strikes
function squaresWithThree(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if ((i * i).toString().includes('3')) {
        count++;
        }
    }

    return count;
}