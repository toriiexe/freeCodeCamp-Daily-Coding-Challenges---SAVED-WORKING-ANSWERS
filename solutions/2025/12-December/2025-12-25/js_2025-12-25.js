// JavaScript solution for 2025-12-25
// Snowflake Generator
function generateSnowflake(crystals) {
    const lines = crystals.split('\n');
    const res = [];

    for (const line of lines) {
        res.push(line + line.split('').reverse().join(''));
    }

    return res.join('\n');
}