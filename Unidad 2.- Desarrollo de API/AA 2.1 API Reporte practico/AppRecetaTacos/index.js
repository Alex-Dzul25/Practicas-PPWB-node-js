import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const recetaJSON = `[

    {
        "id": "0001",  
        "tipo": "taco",  
        "nombre": "Tacos de Cochinita Pibil",  
        "precio": 22.00,  
        "ingredientes": {  
            "proteina": {  
                "nombre": "Puerco",  
                "preparación": "Marinado en achiote y jugo de naranja, cocido en hojas de plátano" 
            },  
            "salsa": {  
                "nombre": "Salsa de habanero",  
                "pico": "Muy picante" 
            },  
            "acompañamientos": [  
                {  
                    "nombre": "Cebolla morada",  
                    "cantidad": "1 cucharada",  
                    "ingredientes": ["Cebolla morada", "Vinagre", "Sal"] 
                }  
            ] 
        } 
    },
    {
        "id": "0002",  
        "tipo": "taco",  
        "nombre": "Tacos de Suadero",  
        "precio": 24.00,  
        "ingredientes": {  
            "proteina": {  
                "nombre": "Res",  
                "preparación": "Cocinado en su jugo lentamente" 
            },  
            "salsa": {  
                "nombre": "Salsa verde",  
                "pico": "Medio" 
            },  
            "acompañamientos": [  
                {  
                    "nombre": "Cilantro y cebolla",  
                    "cantidad": "1 cucharada",  
                    "ingredientes": ["Cilantro", "Cebolla blanca"] 
                }  
            ] 
        } 
    },
    {
        "id": "0003",
        "tipo": "taco",
        "nombre": "Tacos de Barbacoa de Borrego",
        "precio": 26.00,
        "ingredientes":{
            "proteina": {
                "nombre": "Borrego",
                "preparación": "Cocido lentamente en horno de tierra con chiles y especias"
            },
            "salsa": {
                "nombre": "Salsa borracha",
                "pico": "Picante"
            },
            "acompañamientos": [
                {
                    "nombre": "Consomé de barbacoa",
                    "cantidad": "1/2 taza",
                    "ingredientes": ["Caldo de barbacoa", "Cebolla", "Cilantro"]
                }
            ]
        }
    },
    {
        "id": "0004",
        "tipo": "taco",
        "nombre": "Tacos de Tinga",
        "precio": 20.00,
        "ingredientes": {
            "proteina": {
                "nombre": "Pollo",
                "preparación": "Deshebrado y cocido con tomate, cebolla y chipotle"
            },
            "salsa": {
                "nombre": "Salsa de jitomate",
                "pico": "Suave"
            },
            "acompañamientos": [
                {
                    "nombre": "Crema y queso fresco",
                    "cantidad": "1 cucharada",
                    "ingredientes": ["Crema ácida", "Queso fresco", "Aguacate"]
                }
            ]
        }
    }
]`;

const recetaTacos = JSON.parse(recetaJSON);
//console.log(recetasTacos);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetaTacos.find(r => r.ingredientes.proteina.nombre.toLowerCase() === req.params.type.toLowerCase());
    res.json(elegirTaco || { error: "Receta no encontrada" });
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});