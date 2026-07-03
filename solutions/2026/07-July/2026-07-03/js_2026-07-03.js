// JavaScript solution for 2026-07-03
// Database Migration
function migrateRecord(schema, record) {
    let res = { ...record };
    for (const [key, value] of Object.entries(schema)){
        if (!(key in res)){
            res[key] = value;
            }
    }
    return res;
}