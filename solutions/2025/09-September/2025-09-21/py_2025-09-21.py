# Python solution for 2025-09-21
# Video Storage
def number_of_videos(video_size, video_unit, drive_size, drive_unit):
    conversions = {
        'B': 1,
        'KB': 1_000,
        'MB': 1_000_000,
        'GB': 1_000_000_000,
        'TB': 1_000_000_000_000
    }

    video_units = ['B', 'KB', 'MB', 'GB']
    drive_units = ['GB', 'TB']

    if video_unit not in video_units:
        return 'Invalid video unit'
    
    if drive_unit not in drive_units:
        return 'Invalid drive unit'

    return (drive_size * conversions[drive_unit]) // (video_size * conversions[video_unit])