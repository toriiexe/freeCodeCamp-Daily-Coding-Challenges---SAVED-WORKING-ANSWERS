// JavaScript solution for 2026-06-06
// Schema Validator Part 6
function isValidSchema(obj) {
    const roles = ['user', 'creator', 'moderator', 'staff', 'admin'];

    function isValidUser(user) {
        const supporter = "supporter" in user;
        return (typeof user.username === 'string' && typeof user.posts === 'number' && typeof user.verified === 'boolean' && roles.includes(user.role) && (!(supporter) || typeof user.supporter === 'boolean') && Array.isArray(user.badges) && user.badges.every(badge => typeof badge === "string"));
    }

    return (Array.isArray(obj.users) && obj.users.every(user => isValidUser(user)))
}
