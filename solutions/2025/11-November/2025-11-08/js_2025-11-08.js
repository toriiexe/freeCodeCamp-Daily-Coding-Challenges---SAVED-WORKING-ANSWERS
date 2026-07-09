// JavaScript solution for 2025-11-08
// Character Limit
function canPost(message) {
    const messageLength = message.length;
    if (messageLength <= 40) return 'short post';
    if (messageLength <= 80) return 'long post';
    return 'invalid post';
}