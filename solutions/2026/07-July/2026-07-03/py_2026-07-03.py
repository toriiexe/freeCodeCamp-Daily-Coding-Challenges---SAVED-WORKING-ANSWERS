# Python solution for 2026-07-03
# Database Migration
def migrate_record(schema, record):
    res = record.copy()
    for key, value in schema.items():
        if key not in res:
            res[key] = value
    return res