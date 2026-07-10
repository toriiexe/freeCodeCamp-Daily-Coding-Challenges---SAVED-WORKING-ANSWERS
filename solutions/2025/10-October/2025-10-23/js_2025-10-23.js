// JavaScript solution for 2025-10-23
// Favorite Songs
function favoriteSongs(playlist) {
    const desc = playlist.sort((a, b) => b.plays - a.plays);
    return [desc[0].title, desc[1].title];
}