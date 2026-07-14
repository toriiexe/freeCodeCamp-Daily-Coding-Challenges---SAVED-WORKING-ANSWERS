// JavaScript solution for 2026-03-10
// Array Insertion
function insertIntoArray(arr, value, index) {
    arr.push(null);

    for (let i = arr.length - 1; i > index; i--){
        arr[i] = arr[i - 1];
    }

    arr[index] = value;
    
    return arr;
}


/*
// Array Insertion - SHORTER VERSION
function insertIntoArray(arr, value, index) {
    arr.splice(index, 0, value);
    return arr;
}
*/