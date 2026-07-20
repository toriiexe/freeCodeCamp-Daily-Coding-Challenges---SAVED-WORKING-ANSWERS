// JavaScript solution for 2026-05-22
// Meeting Time
function getMeetingTime(availability) {
    const res = [];

    for (const person of availability) {
        const time = [];

        for (const hours of person) {
            for (let i = hours[0]; i < hours[1]; i++) {
                time.push(i);
            }
        }

        res.push(time);
    }

    let common = new Set(res[0]);

    for (const sublist of res.slice(1)) {
        const current = new Set(sublist);

        common = new Set([...common].filter(hour => current.has(hour)));
    }

    return common.size ? Math.min(...common) : 'None';
}