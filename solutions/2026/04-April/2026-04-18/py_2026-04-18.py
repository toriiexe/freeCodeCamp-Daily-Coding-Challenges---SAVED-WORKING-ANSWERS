# Python solution for 2026-04-18
# Array Sum Finder
def find_sum(arr, target):
    def dfs(indx, els, total):
        if total == target and len(els) >= 2:
            return els

        if indx >= len(arr):
            return None

        res = dfs(indx + 1, els + [arr[indx]], total + arr[indx])

        if res:
            return res

        res = dfs(indx + 1, els, total)

        return res

    return dfs(0, [], 0) or 'Sum not found'