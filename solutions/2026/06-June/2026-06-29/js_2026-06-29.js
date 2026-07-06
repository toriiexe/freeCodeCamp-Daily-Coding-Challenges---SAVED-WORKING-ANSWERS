// JavaScript solution for 2026-06-29
// Song Mood Finder
function getMood(genre, bpm) {
    let mood = '';

    if (genre === 'classical') {
        if (bpm >= 60 && bpm <= 109) {
        mood = 'focus';
        } else if (bpm >= 110 && bpm <= 180) {
        mood = 'happy';
        }

    } else if (genre === 'electronic') {
        if (bpm >= 60 && bpm <= 89) {
        mood = 'focus';
        } else if (bpm >= 90 && bpm <= 134) {
        mood = 'happy';
        } else if (bpm >= 135 && bpm <= 180) {
        mood = 'hype';
        }

    } else if (genre === 'pop') {
        if (bpm >= 60 && bpm <= 180) {
        mood = 'happy';
        }

    } else if (genre === 'rock') {
        if (bpm >= 60 && bpm <= 129) {
        mood = 'happy';
        } else if (bpm >= 130 && bpm <= 180) {
        mood = 'hype';
        }
    }

    return mood;
}