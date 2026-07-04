// JavaScript solution for 2026-05-21
// I Before E

/*
JavaScript RegExp - Lookbehinds

(?<=pattern) - Matches text only if it is immediately preceded by the given pattern,
without including that pattern in the matched result.

(?<!pattern) - Matches text only if it is not immediately preceded by the given pattern.
*/
function iBeforeE(sentence) {
    sentence = sentence.replace(/(?<=c)ie/g, 'ei');
    sentence = sentence.replace(/(?<!c)ei/g, 'ie');
    return sentence;
}