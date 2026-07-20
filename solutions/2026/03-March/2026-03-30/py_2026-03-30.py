# Python solution for 2026-03-30
# Due Date
from datetime import datetime
from calendar import monthrange

def add_months(current_date, months_to_add=9):
    year = current_date.year + (current_date.month + months_to_add - 1) // 12
    month = (current_date.month + months_to_add - 1) % 12 + 1
    day = min(current_date.day, monthrange(year, month)[1])
    return datetime(year, month, day)

def get_due_date(date_str):
    current_date = datetime.strptime(date_str, '%Y-%m-%d')
    due_date = add_months(current_date)
    return due_date.strftime('%Y-%m-%d')