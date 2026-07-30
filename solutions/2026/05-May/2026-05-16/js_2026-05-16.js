// JavaScript solution for 2026-05-16
// Longest Domino Chain
function dfsDomino(currentEnd, availableDominoes, actualChain, bestChain) {
	if (actualChain.length > bestChain[0].length) {
		bestChain[0] = [...actualChain];
	}

	for (let i = 0; i < availableDominoes.length; i++) {
		let domino = availableDominoes[i];

		let nextEnd;
		let newDominoInChain;

		if (currentEnd === domino[0]) {
			nextEnd = domino[1];
			newDominoInChain = domino;
		}
		else if (currentEnd === domino[1]) {
			nextEnd = domino[0];
			newDominoInChain = [domino[1], domino[0]];
		}
		else {
			continue;
		}

		let rest = availableDominoes.slice(0, i).concat(availableDominoes.slice(i + 1));

		actualChain.push(newDominoInChain);
		dfsDomino(nextEnd, rest, actualChain, bestChain);

		actualChain.pop();
	}
}

function getLongestChain(dominoes) {
	let bestChain = [[]];

	for (let i = 0; i < dominoes.length; i++) {
		let domino = dominoes[i];

		let rest = dominoes.slice(0, i).concat(dominoes.slice(i + 1));

		dfsDomino(domino[1], rest, [domino], bestChain);
		dfsDomino(domino[0], rest, [[domino[1], domino[0]]], bestChain);
	}

	return bestChain[0];
}