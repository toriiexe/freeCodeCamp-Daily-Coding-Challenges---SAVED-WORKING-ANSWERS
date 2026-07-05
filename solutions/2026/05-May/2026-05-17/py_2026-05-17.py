# Python solution for 2026-05-17
# Mongo ID Date
from datetime import datetime, timezone

def mongo_id_to_date(s):
    timestamp = int(s[:8], 16)

    return datetime.fromtimestamp(timestamp, tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%S.000Z")