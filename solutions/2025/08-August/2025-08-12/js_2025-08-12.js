// JavaScript solution for 2025-08-12
// Base Check
function isValidNumber(n, base) {
    const valid = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0,base);

    for (const c of n.toUpperCase()){
        if (!valid.includes(c)){
            return false;
        }
    }

    return true;
}