// JavaScript solution for 2025-08-16
// Anagram Checker
function areAnagrams(str1, str2) {
    const s1 = str1.toLowerCase().split('').sort().join('');
    const s2 = str2.toLowerCase().split('').sort().join('');
    
    return s1 === s2;
}