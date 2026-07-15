// JavaScript solution for 2026-03-24
// Passing Exam Count
function passingCount(scores, passingScore) {
    return scores.filter((score) => score >= passingScore).length;
}