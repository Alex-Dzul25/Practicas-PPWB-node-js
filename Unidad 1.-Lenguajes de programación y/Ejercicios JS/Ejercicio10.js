// 10. Función que simula una operación asíncrona con setTimeout y callback
function operacionAsincrona(callback) {
    setTimeout(() => {
        callback("Operación completada");
    }, 2000);
}

operacionAsincrona((mensaje) => console.log(mensaje));
