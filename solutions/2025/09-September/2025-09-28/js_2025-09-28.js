// JavaScript solution for 2025-09-28
// CSV Header Parser
function getHeadings(csv) {
    return csv.split(',').map(heading => heading.trim());
}