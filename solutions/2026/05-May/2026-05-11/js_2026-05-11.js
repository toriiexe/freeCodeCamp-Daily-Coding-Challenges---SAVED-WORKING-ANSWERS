// JavaScript solution for 2026-05-11
// Oldest Person
function getOldest(people) {
    if (!people || people.length === 0) {
        return [];
    }

    let maxAge = -1;
    let oldest = [];

    for (const person of people) {
        if (person.age > maxAge) {
        maxAge = person.age;
        oldest = [person.name];
        } 
        else if (person.age === maxAge) {
        oldest.push(person.name);
        }
    }

    return oldest;
}