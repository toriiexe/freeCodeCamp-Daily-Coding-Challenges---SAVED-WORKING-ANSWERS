# Python solution for 2026-04-01
# Prank Number
def fix_prank_number(arr):
    if len(arr) < 3:
        return arr

    diffs = [arr[i+1] - arr[i] for i in range(len(arr) - 1)]
    
    diff_counts = {}
    for d in diffs:
        diff_counts[d] = diff_counts.get(d, 0) + 1
    
    correct_diff = max(diff_counts, key=diff_counts.get)
    
    fixed_arr = list(arr)
    
    for i in range(len(diffs)):
        if diffs[i] != correct_diff:
            if i == 0 and diffs[1] == correct_diff:
                fixed_arr[0] = fixed_arr[1] - correct_diff
            elif i == len(diffs) - 1 and diffs[i-1] == correct_diff:
                fixed_arr[i+1] = fixed_arr[i] + correct_diff
            else:
                fixed_arr[i+1] = fixed_arr[i] + correct_diff
            break
            
    return fixed_arr