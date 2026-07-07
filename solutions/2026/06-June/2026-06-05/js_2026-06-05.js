// JavaScript solution for 2026-06-05
// Schema Validator Part 5
function isValidSchema(obj) {
    const roles = ['user', 'creator', 'moderator', 'staff', 'admin'];
    const supporter = "supporter" in obj;
    return (typeof obj.username === 'string' && typeof obj.posts === 'number' && typeof obj.verified === 'boolean' && roles.includes(obj.role) && (!(supporter) || typeof obj.supporter === 'boolean') && Array.isArray(obj.badges) && obj.badges.every(badge => typeof badge === "string"));
}