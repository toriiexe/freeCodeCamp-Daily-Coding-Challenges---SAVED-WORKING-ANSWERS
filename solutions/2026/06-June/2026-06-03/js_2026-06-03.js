// JavaScript solution for 2026-06-03
// Schema Validator Part 3
function isValidSchema(obj) {
    const roles = ['user', 'creator', 'moderator', 'staff', 'admin'];
    return (typeof obj.username === 'string' && typeof obj.posts === 'number' && typeof obj.verified === 'boolean' && roles.includes(obj.role));
}