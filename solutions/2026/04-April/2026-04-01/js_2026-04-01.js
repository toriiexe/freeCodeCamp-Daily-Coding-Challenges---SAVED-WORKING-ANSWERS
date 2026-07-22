// JavaScript solution for 2026-04-01
// Prank Number
function fixPrankNumber(arr) {
	if (arr.length < 3) {
		return arr;
	}

	let diffs = [];
	for (let i = 0; i < arr.length - 1; i++) {
		diffs.push(arr[i+1] - arr[i]);
	}
	
	let diffCounts = {};
	for (let d of diffs) {
		diffCounts[d] = (diffCounts[d] || 0) + 1;
	}
	
	let correctDiff = Object.keys(diffCounts).reduce((a, b) => diffCounts[a] > diffCounts[b] ? a : b);
	correctDiff = Number(correctDiff);
	
	let fixedArr = [...arr];
	
	for (let i = 0; i < diffs.length; i++) {
		if (diffs[i] !== correctDiff) {
			if (i === 0 && diffs[1] === correctDiff) {
				fixedArr[0] = fixedArr[1] - correctDiff;
			}
			else if (i === diffs.length - 1 && diffs[i-1] === correctDiff) {
				fixedArr[i+1] = fixedArr[i] + correctDiff;
			}
			else {
				fixedArr[i+1] = fixedArr[i] + correctDiff;
			}
			break;
		}
	}
			
	return fixedArr;
}