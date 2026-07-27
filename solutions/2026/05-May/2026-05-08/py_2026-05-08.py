# Python solution for 2026-05-08
# Medication Reminder
def medication_reminder(medications, current_time):
    meds = {
        'Deployxitrin': [8, 16],
        'Debuggamanizole': [7, 13, 21]
    }

    h, m = map(int, current_time.split(':'))
    mins = h * 60 + m
    res = []

    for med, time in medications:
        med_h, med_m = map(int, time.split(':'))
        med_mins = med_h * 60 + med_m

        if med in meds:
            min_time = float('inf')
            for t in meds[med]:
                t *= 60

                if t == med_mins:
                    continue

                temp = (t - mins) % (24 * 60)
                min_time = min(min_time, temp)
            res.append([med, min_time])

        elif med == 'Mergeflictamine':
            temp = (med_mins + 240 - mins) % (24 * 60)
            res.append([med, temp])

    res.sort(key=lambda item: item[1])
    return f'{res[0][0]} in {res[0][1] // 60}h {res[0][1] % 60}m'