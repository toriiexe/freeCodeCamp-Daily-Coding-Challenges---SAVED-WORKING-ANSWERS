// JavaScript solution for 2026-07-06
// lowercase words
function getLowercaseWords(str) {
    let res = []
    for (const word of str.split(' ')){
        if (word === word.toLowerCase){
            res.push(word);
        }
    }
    return res.join(' ');
}