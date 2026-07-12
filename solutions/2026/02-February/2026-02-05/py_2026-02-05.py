# Python solution for 2026-02-05
# Pocket Change
def count_change(change):
    total = sum(change)
    return f'${total // 100}.{(total % 100):02d}'