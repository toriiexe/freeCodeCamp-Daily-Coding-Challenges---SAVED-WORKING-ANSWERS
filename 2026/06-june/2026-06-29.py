#Song Mood Finder
def get_mood(genre, bpm):
    mood = ''
    
    if genre == 'classical':
        if 60 <= bpm <= 109:
            mood = 'focus'
        elif 110 <= bpm <= 180:
            mood = 'happy'
            
    elif genre == 'electronic':
        if 60 <= bpm <= 89:
            mood = 'focus'
        elif 90 <= bpm <= 134:
            mood = 'happy'
        elif 135 <= bpm <= 180:
            mood = 'hype'
            
    elif genre == 'pop':
        if 60 <= bpm <= 180:
            mood = 'happy'
            
    elif genre == 'rock':
        if 60 <= bpm <= 129:
            mood = 'happy'
        elif 130 <= bpm <= 180:
            mood = 'hype'

    return mood