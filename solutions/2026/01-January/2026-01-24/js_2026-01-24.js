// JavaScript solution for 2026-01-24
// Bingo! Letter
function getBingoLetter(n) {
    return n >= 1 && n <= 75 ? "BINGO"[Math.floor((n - 1) / 15)] : "Invalid value";
}