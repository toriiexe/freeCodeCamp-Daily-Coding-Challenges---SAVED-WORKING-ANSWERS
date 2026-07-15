// JavaScript solution for 2026-03-31
// Wake-Up Alarm
function alarmCheck(alarmTime, wakeTime) {
    const [alarmH, alarmM] = alarmTime.split(':').map(Number);
    const [wakeH, wakeM] = wakeTime.split(':').map(Number);

    const alarmTotal = alarmH * 60 + alarmM;
    const wakeTotal = wakeH * 60 + wakeM;

    if (wakeTotal < alarmTotal) {
        return 'early';
    } else if (wakeTotal <= alarmTotal + 10) {
        return 'on time';
    } else {
        return 'late';
    }
}