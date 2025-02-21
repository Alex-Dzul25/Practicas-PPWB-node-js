import inquirer from 'inquirer';
//var qr= require ('qr-image');
import qr from "qr-image";
import fs from "fs" ;

inquirer
  .prompt([
    /* Pass your questions in here */{
        message: "Escribe la dirreccion de tu pagina de Githun",
        name: "URL",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const enlace = answers.URL;

    var qr_png = qr.image(enlace);
    qr_png.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile("enlace.txt", enlace,(err) => {
        if (err) throw err;
        console.log("El archivo con el enlace ha sido creado Correctamente");
      });
  })
  
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });