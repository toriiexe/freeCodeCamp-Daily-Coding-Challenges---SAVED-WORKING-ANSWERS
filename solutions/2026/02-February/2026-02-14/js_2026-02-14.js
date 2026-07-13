// JavaScript solution for 2026-02-14
// 2026 Winter Games Day 9: Skeleton
function getDifficulty(track) {
    const rExtraPoints = track.match(/R(?=L)/g) || [];
    const lExtraPoints = track.match(/L(?=R)/g) || [];

    const rPoints = rExtraPoints.length * 15 + ((track.match(/R/g) || []).length - rExtraPoints.length) * 5;
    const lPoints = lExtraPoints.length * 15 + ((track.match(/L/g) || []).length - lExtraPoints.length) * 5;

    const total = rPoints + lPoints;

    if (total <= 100) return 'Easy';
    if (total <= 200) return 'Medium';
    return 'Hard';
}