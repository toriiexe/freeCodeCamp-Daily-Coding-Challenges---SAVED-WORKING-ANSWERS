# Python solution for 2026-01-22
# Class Average
def get_average_grade(scores):
    avg_score = sum(scores) / len(scores)
    grades = [
        (97, "A+"),
        (93, "A"),
        (90, "A-"),
        (87, "B+"),
        (83, "B"),
        (80, "B-"),
        (77, "C+"),
        (73, "C"),
        (70, "C-"),
        (67, "D+"),
        (63, "D"),
        (60, "D-"),
        (0, "F")
    ]

    for minimum, grade in grades:
        if avg_score >= minimum:
            return grade