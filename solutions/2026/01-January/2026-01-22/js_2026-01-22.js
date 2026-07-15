// JavaScript solution for 2026-01-22
// Class Average
function getAverageGrade(scores) {
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

    const grades = [
        [97, "A+"],
        [93, "A"],
        [90, "A-"],
        [87, "B+"],
        [83, "B"],
        [80, "B-"],
        [77, "C+"],
        [73, "C"],
        [70, "C-"],
        [67, "D+"],
        [63, "D"],
        [60, "D-"],
        [0, "F"]
    ];

    for (const [minimum, grade] of grades) {
        if (avgScore >= minimum) {
            return grade;
        }
    }
}