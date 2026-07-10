// JavaScript solution for 2025-09-05
// IPv4 Validator
function isValidIPv4(ipv4) {
    const parts = ipv4.split('.');

    if (parts.length != 4){
        return false;
    }

    for (const part of parts){
        if (!(/^\d+$/.test(part))){
        return false;
        }
        
        if (part !== '0' && part.startsWith('0')) {
        return false;
        }

        const num = Number(part);
        if (!(0 <= num && num <= 255)){
        return false;
        }


    }

    return true;
}