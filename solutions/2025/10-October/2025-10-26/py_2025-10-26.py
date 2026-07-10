# Python solution for 2025-10-26
# Duration Formatter
def format(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60

    if hours > 0:
        return f'{hours}:{minutes:02d}:{secs:02d}'
    elif minutes > 0:
        return f'{minutes}:{secs:02d}'
    else:
        return f'0:{secs:02d}'