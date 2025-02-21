const fs = require("fs");

//usar el metodo writeFile para escribir

/*fs.writeFile("archivo.txt","TEXTO MODIFICADO",(err)=>{
    if(err)throw err;
    console.log ("El Archivo se ha creado");
})*/


fs.readFile('./archivo.txt', 'utf8',(err, data) => {
  if (err) throw err;
  console.log(data);
});