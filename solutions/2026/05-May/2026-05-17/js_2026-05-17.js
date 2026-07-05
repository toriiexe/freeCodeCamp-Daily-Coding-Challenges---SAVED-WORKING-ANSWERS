// JavaScript solution for 2026-05-17
// Mongo ID Date
function mongoIdToDate(id) {
    const timestamp = parseInt(id.slice(0, 8), 16);
    return new Date(timestamp * 1000).toISOString();
}