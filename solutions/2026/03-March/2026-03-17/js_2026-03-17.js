// JavaScript solution for 2026-03-17
// Anniversary Milestones
function getMilestone(years) {
    const milestones = [
        [70, 'Platinum'],
        [60, 'Diamond'],
        [50, 'Gold'],
        [40, 'Ruby'],
        [25, 'Silver'],
        [10, 'Tin'],
        [5, 'Wood'],
        [1, 'Paper'],
        [0, 'Newlyweds'],
    ];

    for (const [years_married, milestone] of milestones){
        if (years >= years_married){
        return milestone;
        }
    }
}