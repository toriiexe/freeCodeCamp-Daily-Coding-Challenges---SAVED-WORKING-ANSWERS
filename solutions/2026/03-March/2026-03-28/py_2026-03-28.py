# Python solution for 2026-03-28
# Pascal's Triangle Row
def pascal_row(n):
    row = [1]
    
    for i in range(n-1):
        new_row = [1]
        for j in range(len(row) - 1):
            new_row.append(row[j] + row[j + 1])
        new_row.append(1)
        row = new_row
    
    return row

"""
def pascal_row(n):
    pascal = [[1]]
    
    for i in range(1, n):
        temp = []
        for j in range(i + 1):
            if j == 0 or j == i:
                temp.append(1)
            else:
                temp.append(pascal[i-1][j-1] + pascal[i-1][j])
        pascal.append(temp)
    
    return pascal[-1]
"""