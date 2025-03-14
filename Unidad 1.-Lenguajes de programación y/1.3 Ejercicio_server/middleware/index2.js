import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath (import.meta.url));
console.log(__dirname);

const aplicacion = express ();
const port = 3000;

var nombreEquipo= "";

aplicacion.use(bodyParser.urlencoded({extended:true}));

function registrador(req, res, next) {
    console.log(req.body);
    nombreEquipo = req.body["mascota"]+ req.body["adjetivo"];
    next();
}

aplicacion.use(registrador);

aplicacion.get("/", (req, res)=> {
    res.sendFile( __dirname + "/public/index.html");
});

aplicacion.post("/submit", (req, res)=>{
    res.send(`<h1>El nombre de tu equipo es: </h1> <h2>${nombreEquipo}✌️</h2>`)
});

aplicacion.listen(port, () =>{
    console.log(`Servidor esta corriendo en el puerto${port}`);
});
