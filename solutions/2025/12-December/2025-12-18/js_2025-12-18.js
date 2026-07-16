// JavaScript solution for 2025-12-18
// Checkerboard
function createBoard(dimensions) {
    const rows = dimensions[0];
    const cols = dimensions[1];

    const res = [];

    for (let r = 0; r < rows; r++){
        const temp = [];
        
        for (let c = 0; c < cols; c++){
            if ((r + c) % 2 == 0){
                temp.push('X');
            } else{
                temp.push('O');
            }
        }
        res.push(temp);
    }

    return res;
}