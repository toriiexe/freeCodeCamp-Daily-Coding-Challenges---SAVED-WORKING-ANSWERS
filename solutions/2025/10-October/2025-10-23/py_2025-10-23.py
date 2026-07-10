# Python solution for 2025-10-23
# Favorite Songs
def favorite_songs(playlist):
    desc = sorted(playlist, key=lambda item: item['plays'], reverse=True)
    return [desc[0]['title'], desc[1]['title']]