import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath (import.meta.url));
console.log(__dirname);

const port = 3000;
const aplicacion = express ();

aplicacion.use(bodyParser.urlencoded({extended:true}))

aplicacion.post("/submit", (req, res)=>{
    console.log(req.body);
    console.log("Datos recibidos")
});

aplicacion.get("/", (req, res)=> {
    res.sendFile( __dirname + "/public/index.html");
});

aplicacion.listen(port, () =>{
    console.log(`Servidor esta corriendo en el puerto${port}`);
});
