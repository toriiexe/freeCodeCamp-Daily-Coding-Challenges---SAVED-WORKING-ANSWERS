// JavaScript solution for 2025-11-11
// Vowels and Consonants
function count(str) {
    let vowels = 0,
        consonants = 0;

        for (const ch of str.toLowerCase()){
        if ('a' <= ch && ch <= 'z'){
            if ('aeiou'.includes(ch)){
            vowels++;
            } else{
            consonants++;
            }
        }
        }
    return [vowels, consonants];
}