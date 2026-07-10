// JavaScript solution for 2025-10-26
// Duration Formatter
function format(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    } else if (minutes > 0) {
        return `${minutes}:${String(secs).padStart(2, '0')}`;
    } else {
        return `0:${String(secs).padStart(2, '0')}`;
    }
}