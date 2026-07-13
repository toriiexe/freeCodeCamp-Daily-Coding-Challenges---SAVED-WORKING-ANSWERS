# Python solution for 2026-02-23
# Blood Type Compatibility
def can_donate(donor, recipient):

    possible_donations = {
        'O-':  ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],
        'O+':  ['O+', 'A+', 'B+', 'AB+'],
        'A-':  ['A-', 'A+', 'AB-', 'AB+'],
        'A+':  ['A+', 'AB+'],
        'B-':  ['B-', 'B+', 'AB-', 'AB+'],
        'B+':  ['B+', 'AB+'],
        'AB-': ['AB-', 'AB+'],
        'AB+': ['AB+']
    }

    return recipient in possible_donations[donor]