// JavaScript solution for 2025-12-27
// Rock, Paper, Scissors
function rockPaperScissors(player1, player2) {
    const beats = {
            'Rock': 'Scissors',
            'Paper': 'Rock',
            'Scissors': 'Paper'
            }

    if (beats[player1] == player2) 
        return 'Player 1 wins';
    if (beats[player2] == player1)
        return 'Player 2 wins';
    return 'Tie';
}