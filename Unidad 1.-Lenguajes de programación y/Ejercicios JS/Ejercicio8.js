// 8. Crear un objeto 'moto' con propiedades y un método
let moto = {
    marca: "Yamaha",
    modelo: "MT-07",
    año: 2023,
    descripcion: function () {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
};

// Imprimir la descripción de la moto
console.log(moto.descripcion());
