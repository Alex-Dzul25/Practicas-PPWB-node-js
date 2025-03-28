import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

const temasJSON = `[
    {
        "id": "0001",
        "nombre": "Programación Lógica y Funcional",
        "descripcion": "Paradigmas de programación basados en lógica matemática y funciones puras.",
        "palabrasClaves": ["Prolog", "Haskell", "recursión", "inmutabilidad", "pattern matching"],
        "practicas": [
            {
                "titulo": "Resolución de problemas lógicos",
                "descripcion": "Implementar soluciones usando programación lógica en Prolog.",
                "objetivo": "Desarrollar pensamiento lógico y resolver problemas mediante relaciones y reglas."
            },
            {
                "titulo": "Funciones puras y recursión",
                "descripcion": "Crear programas en Haskell usando funciones puras y recursión.",
                "objetivo": "Comprender los conceptos de transparencia referencial y programación declarativa."
            }
        ]
    },
    {
        "id": "0002",
        "nombre": "Administración de Redes",
        "descripcion": "Gestión, configuración y mantenimiento de infraestructuras de red.",
        "palabrasClaves": ["TCP/IP", "DNS", "firewalls", "VPN", "monitoreo"],
        "practicas": [
            {
                "titulo": "Configuración de routers y switches",
                "descripcion": "Montar y configurar una red empresarial básica.",
                "objetivo": "Aprender los fundamentos de enrutamiento y conmutación."
            },
            {
                "titulo": "Seguridad en redes",
                "descripcion": "Implementar medidas de seguridad como firewalls y VPNs.",
                "objetivo": "Proteger infraestructuras de red contra amenazas externas."
            }
        ]
    },
    {
        "id": "0003",
        "nombre": "Inteligencia Artificial",
        "descripcion": "Técnicas para crear sistemas que muestran comportamiento inteligente.",
        "palabrasClaves": ["machine learning", "redes neuronales", "procesamiento de lenguaje", "visión computacional"],
        "practicas": [
            {
                "titulo": "Modelo de clasificación",
                "descripcion": "Implementar un algoritmo de aprendizaje supervisado para clasificación de datos.",
                "objetivo": "Entender los fundamentos del entrenamiento y evaluación de modelos."
            },
            {
                "titulo": "Red neuronal básica",
                "descripcion": "Crear una red neuronal para reconocimiento de imágenes simples.",
                "objetivo": "Aprender los conceptos básicos del deep learning."
            }
        ]
    },
    {
        "id": "0004",
        "nombre": "Programación Web del lado del Servidor",
        "descripcion": "Desarrollo de aplicaciones web con procesamiento en el servidor.",
        "palabrasClaves": ["Node.js", "Express", "APIs", "bases de datos", "autenticación"],
        "practicas": [
            {
                "titulo": "API RESTful",
                "descripcion": "Crear una API completa con Express que interactúe con una base de datos.",
                "objetivo": "Aprender a diseñar e implementar endpoints REST."
            },
            {
                "titulo": "Sistema de autenticación",
                "descripcion": "Implementar registro y login de usuarios con JWT.",
                "objetivo": "Entender los flujos de autenticación y autorización."
            }
        ]
    }
]`;

const temas = JSON.parse(temasJSON);

app.use(express.static("public"));
app.use(bodyParser.json());

app.get('/tema/:id', (req, res) => {
    const tema = temas.find(t => t.id === req.params.id);
    res.json(tema || { error: "Tema no encontrado" });
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});