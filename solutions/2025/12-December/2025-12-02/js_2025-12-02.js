// JavaScript solution for 2025-12-02
// Camel to Snake
function toSnake(camel) {
    return camel.replace(/(?=[A-Z])/g, "_").toLowerCase();
}

// return camel.replace(/(?<!^)(?=[A-Z])/g, "_").toLowerCase(); // Prevents adding a leading underscore if the input starts with an uppercase letter.