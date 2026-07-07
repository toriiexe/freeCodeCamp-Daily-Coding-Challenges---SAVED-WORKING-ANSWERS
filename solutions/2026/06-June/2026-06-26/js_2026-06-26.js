// JavaScript solution for 2026-06-26
// Blood Bank
function triageBlood(bank, patients) {
    const exc = {
        AB: ["AB", "A", "B", "O"],
        A: ["A", "O"],
        B: ["B", "O"],
        O: ["O"]
    };

    let served = 0;

    for (const bloodType of patients) {
        for (const donor of exc[bloodType]) {
        const index = bank.indexOf(donor);

        if (index !== -1) {
            bank.splice(index, 1);
            served++;
            break;
        }
        }
    }

    return `${served} of ${patients.length} patients served`;
}