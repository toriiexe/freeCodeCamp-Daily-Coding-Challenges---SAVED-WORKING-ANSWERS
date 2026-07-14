# Python solution for 2026-03-17
# Anniversary Milestones
def get_milestone(years):
    if years < 1:
        return 'Newlyweds'
    elif years < 5:
        return 'Paper'
    elif years < 10:
        return 'Wood'
    elif years < 25:
        return 'Tin'
    elif years < 40:
        return 'Silver'
    elif years < 50:
        return 'Ruby'
    elif years < 60:
        return 'Gold'
    elif years < 70:
        return 'Diamond'
    else:
        return 'Platinum'
    

"""
# Anniversary Milestones - ANOTHER VERSION
def get_milestone(years):
    milestones = [
        (70, 'Platinum'),
        (60, 'Diamond'),
        (50, 'Gold'),
        (40, 'Ruby'),
        (25, 'Silver'),
        (10, 'Tin'),
        (5, 'Wood'),
        (1, 'Paper'),
        (0, 'Newlyweds'),
    ]
    
    for years_married, milestone in milestones:
        if years >= years_married:
            return milestone
"""