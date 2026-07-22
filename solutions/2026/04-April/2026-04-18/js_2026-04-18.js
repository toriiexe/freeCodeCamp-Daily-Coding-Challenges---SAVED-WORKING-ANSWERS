// JavaScript solution for 2026-04-18
// Array Sum Finder
function findSum(arr, target) {
	function dfs(indx, els, total) {
		if (total === target && els.length >= 2) {
			return els;
		}

		if (indx >= arr.length) {
			return null;
		}

		let res = dfs(indx + 1, [...els, arr[indx]], total + arr[indx]);

		if (res) {
			return res;
		}

		res = dfs(indx + 1, els, total);

		return res;
	}

	return dfs(0, [], 0) || 'Sum not found';
}