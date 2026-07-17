// JavaScript solution for 2025-10-22
// Speak Wisely, You Must
function wiseSpeak(sentence) {
    const words = sentence.slice(0, -1).split(" ");

    const targets = ["have", "must", "are", "will", "can"];
    const idx = words.findIndex(word => targets.includes(word.toLowerCase()));

    const firstHalf = words.slice(idx + 1);
    const secondHalf = words.slice(0, idx + 1).map(word => word.toLowerCase());

    return firstHalf.join(" ").charAt(0).toUpperCase() + firstHalf.join(" ").slice(1) + ", " + secondHalf.join(" ") + sentence.slice(-1);
}