# Python solution for 2026-01-27
# Odd or Even Day
from datetime import datetime, timezone
def odd_or_even_day(timestamp):
    return 'even' if datetime.fromtimestamp(timestamp / 1000, tz=timezone.utc).day % 2 == 0 else 'odd'