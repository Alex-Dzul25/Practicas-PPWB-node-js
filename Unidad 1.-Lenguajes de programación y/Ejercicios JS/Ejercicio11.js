// 11. Código que maneja errores al convertir una cadena en número
try {
    let numero = Number("abc");
    if (isNaN(numero)) throw new Error("No es un número válido");
    console.log(numero);
} catch (error) {
    console.error("Error:", error.message);
}
