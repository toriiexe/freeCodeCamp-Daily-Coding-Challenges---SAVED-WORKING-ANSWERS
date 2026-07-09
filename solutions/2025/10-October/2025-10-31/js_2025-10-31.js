// JavaScript solution for 2025-10-31
// SpOoKy~CaSe
function spookify(boo) {
    boo = boo.replaceAll('_', '~').replaceAll('-', '~');

    let result = []
    let count = 0;

    for (const ch of boo){
        if (ch === '~'){
        result.push('~');
        } else{
        if (count % 2 === 0){
            result.push(ch.toUpperCase());
        } else{
            result.push(ch.toLowerCase());
        }
        count++;
        }
    }

    return result.join('');
}