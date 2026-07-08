// JavaScript solution for 2026-01-10
// Tic-Tac-Toe
function ticTacToe(board) {
	const lines = [
		...board,
		...[0, 1, 2].map(c => [board[0][c], board[1][c], board[2][c]]),
		[0, 1, 2].map(i => board[i][i]),
		[0, 1, 2].map(i => board[i][2 - i])
	];

	for (const line of lines) {
		if (line[0] === line[1] && line[1] === line[2]) {
			return `${line[0]} wins`;
		}
	}

	return 'Draw';
}