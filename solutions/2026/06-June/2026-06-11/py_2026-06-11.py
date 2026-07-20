# Python solution for 2026-06-11
# Idea Rankings
def analyze_ideas(ideas):
    res = []
    
    for idea in ideas:
        expected = ((idea[1] + 4 * idea[2] + idea[3]) / 6) * len(idea[0])
        res.append([expected, idea[0]])

    sorted_res = sorted(res, key=lambda i: i[0])

    return [item[1] for item in sorted_res]