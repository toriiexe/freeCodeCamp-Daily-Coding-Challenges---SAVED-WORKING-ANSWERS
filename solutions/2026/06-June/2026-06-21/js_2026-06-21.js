// JavaScript solution for 2026-06-21
// Summer Solstice
function getDaytimeHours(latitude) {
    const s = '☀️';
    const n = '🌑';

    let daytimeHours = 12 + (latitude / 90) * 12;
    daytimeHours = Math.round(daytimeHours / 2) * 2;

    const nighttimeHours = 24 - daytimeHours;
    const halfOfNighttimeHours = nighttimeHours / 2;

    return n.repeat(halfOfNighttimeHours) + s.repeat(daytimeHours) + n.repeat(halfOfNighttimeHours);
}