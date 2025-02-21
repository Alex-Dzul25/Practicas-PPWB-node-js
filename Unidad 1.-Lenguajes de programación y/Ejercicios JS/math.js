// math.js
module.exports = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multiplicacion: (a, b) => a * b,
    division: (a, b) => (b !== 0 ? a / b : "Error: División por cero")
};
