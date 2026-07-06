// JavaScript solution for 2026-06-02
// Schema Validator Part 2
function isValidSchema(obj) {
    let username = false;
    let posts = false;
    let verified = false;

    for (const [key, value] of Object.entries(obj)) {
        if (key === 'username') {
        username = typeof value === 'string';
        } else if (key === 'posts') {
        posts = typeof value === 'number';
        } else if (key === 'verified') {
        verified = typeof value === 'boolean';
        }
    }

    return username && posts && verified;
}

/* Schema Validator Part 2 - SHORTER VERSION
function isValidSchema(obj) {
    return (typeof obj.username === 'string' && typeof obj.posts === 'number' && typeof obj.verified === 'boolean');
}
*/