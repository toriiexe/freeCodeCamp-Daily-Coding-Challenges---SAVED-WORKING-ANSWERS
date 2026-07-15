// JavaScript solution for 2026-07-15
// Array Chunks
function chunkArray(arr, size) {
    if (size <= 0){
        throw new Error('Invalid size value');
    }
    const res = [];

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }

    return res;
}