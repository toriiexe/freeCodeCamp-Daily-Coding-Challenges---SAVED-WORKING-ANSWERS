// JavaScript solution for 2025-08-15
// Jbelmud Text
function jbelmu(text) {
    const words = text.split(' ');
    let res = [];

    for (const word of words){
        if (word.length <= 2){
            res.push(word);
        }
        else{
            const mid = word.slice(1,-1).split('').sort().join('');
            res.push(word[0] + mid + word[word.length - 1]);
        }
    }
    return res.join(' ');
}