// JavaScript solution for 2026-07-05
// Bucket Fill
function fill(i, j, grid, valueToChange, newValue){
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length){
        return;
    }
    if (grid[i][j] != valueToChange){
        return;
    }

    grid[i][j] = newValue;

    fill(i-1, j, grid, valueToChange, newValue)
    fill(i+1, j, grid, valueToChange, newValue)
    fill(i, j-1, grid, valueToChange, newValue)
    fill(i, j+1, grid, valueToChange, newValue)

    return grid;
}


function bucketFill(grid, [row, col], newValue) {
    let valueToChange = grid[row][col]
    if (valueToChange === newValue){
        return grid;
    }

    fill(row, col, grid, valueToChange, newValue)
    
    return grid;
}