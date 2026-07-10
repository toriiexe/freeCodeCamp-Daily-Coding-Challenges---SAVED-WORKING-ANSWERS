// JavaScript solution for 2025-10-24
// Hidden Treasure
function dive(map, coordinates) {
    const [row, col] = coordinates;

    if (map[row][col] === '-'){
        return 'Empty';
    }

    let oCounter = 0;
    for (let r = 0; r < map.length; r++){
        for (let c = 0; c < map[r].length; c++){
        if (map[r][c] === 'O'){
            oCounter++;
        }
        }
    }

    if (map[row][col] === 'O'){
        if (oCounter === 1){
        return 'Recovered';
        } else{
        return 'Found';
        }
    }
    
    return 'Found';
}