#Targeted sum
def find_target(arr, target):
    d = {}

    for i, num in enumerate(arr):
        needed = target - num

        if needed in d:
            return [d[needed], i]

        d[num] = i

    return "Target not found"