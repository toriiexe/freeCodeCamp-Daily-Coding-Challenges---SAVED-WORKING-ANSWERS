// JavaScript solution for 2025-10-17
// Credit Card Masker
function mask(card) {
    return card.replace(/[0-9]{4}/g, (m, offset) => offset < card.length - 4 ? "****" : m);
}