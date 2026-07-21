# Python solution for 2025-12-06
# Date Formatter
month_dict = {
    'January': 1,
    'February': 2,
    'March': 3,
    'April': 4,
    'May': 5,
    'June': 6,
    'July': 7,
    'August': 8,
    'September': 9,
    'October': 10,
    'November': 11,
    'December': 12
}

def format_date(date_string):
    m, d, y = date_string.replace(',', '').split()
    return f'{y}-{int(month_dict[m]):02d}-{int(d):02d}'