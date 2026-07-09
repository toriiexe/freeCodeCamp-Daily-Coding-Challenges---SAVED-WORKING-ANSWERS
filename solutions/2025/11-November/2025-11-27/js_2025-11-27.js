// JavaScript solution for 2025-11-27
// What's my age again?
function calculateAge(birthday) {
    const yt = 2025, mt = 11, dt = 27;

    const [y, m, d] = birthday.split('-').map(Number);

    let age = yt - y;

    if (m > mt || (m === mt && d > dt)) {
        age -= 1;
    }

    return age;
}