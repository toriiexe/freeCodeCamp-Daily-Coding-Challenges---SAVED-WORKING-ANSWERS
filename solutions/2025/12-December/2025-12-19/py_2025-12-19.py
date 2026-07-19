# Python solution for 2025-12-19
# Pairwise
def pairwise(arr, target):
    indx = 0
    used = [False] * len(arr)

    for i in range(len(arr)):
        if used[i]:
            continue

        for j in range(i + 1, len(arr)):
            if not used[j] and arr[i] + arr[j] == target:
                indx += i + j
                used[i] = True
                used[j] = True
                break

    return indx