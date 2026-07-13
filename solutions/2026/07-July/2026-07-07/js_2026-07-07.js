// JavaScript solution for 2026-07-07
// Nearest Multiple
function roundToNearestMultiple(num, multiple) {
    const first_endpoint = num - num % multiple;
    const second_endpoint = first_endpoint + multiple;
    
    if (num - first_endpoint < second_endpoint - num){
        return first_endpoint;
    } else{
        return second_endpoint;
    }
}