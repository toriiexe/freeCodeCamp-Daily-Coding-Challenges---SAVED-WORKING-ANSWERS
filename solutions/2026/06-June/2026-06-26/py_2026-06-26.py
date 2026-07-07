# Python solution for 2026-06-26
# Blood Bank
def triage_blood(bank, patients):
    exc = {
        'AB': ['AB', 'A', 'B', 'O'],
        'A': ['A', 'O'],
        'B': ['B', 'O'],
        'O': ['O']
    }

    served = 0

    for bloodtype in patients:
        for donor in exc[bloodtype]:
            if donor in bank:
                bank.remove(donor)
                served += 1
                break

    return f'{served} of {len(patients)} patients served'