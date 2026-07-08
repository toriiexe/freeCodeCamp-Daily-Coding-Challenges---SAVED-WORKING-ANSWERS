// JavaScript solution for 2026-01-01
// Resolution Streak
function resolutionStreak(days) {
    let n = 0;
    for (const day of days){
        if (day[0] >= 10_000 && day[1] <= 120 && day[2] >= 5){
        n += 1
        } else{
        return `Resolution failed on day ${n+1}: ${n} day streak.`
        }
    }

    return `Resolution on track: ${n} day streak.`
}