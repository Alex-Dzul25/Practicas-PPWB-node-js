const objetoJavaScrpt = {
    nombre: "Taco de Pollo",
    ingredientes:{
        proteina: "Pollo",
        salsa: "Salsa Verde"
    }
};

const jsonString = JSON.stringify(objetoJavaScrpt);

console.log(jsonString);