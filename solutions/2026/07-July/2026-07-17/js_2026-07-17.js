// JavaScript solution for 2026-07-17
// Birthday Countdown
function isValidDate(y, m, d) {
    const date = new Date(y, m - 1, d);
    return (date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d);
}

function daysUntilBirthday(today, birthday) {
    const [todayY, todayM, todayD] = today.split('-').map(Number);
    const [birthdayM, birthdayD] = birthday.split('/').map(Number);

    let birthdayY = todayY;
    let i = 0;

    const todayDate = new Date(todayY, todayM - 1, todayD);

    while (true) {
        if (isValidDate(birthdayY + i, birthdayM, birthdayD)) {
            const candidate = new Date(birthdayY + i, birthdayM - 1, birthdayD);

            if (candidate <= todayDate) {
                i++;
                continue;
            }

            const diff = candidate - todayDate;
            return Math.floor(diff / (1000 * 60 * 60 * 24));
        }

        i++;
    }
}