import express from 'express';
import axios from 'axios';
import ejs from 'ejs';

const app = express();
const port = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Servir archivos estáticos (como el CSS y las imágenes)
app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes/1');
        const quoteData = result.data[0];
        const quote = quoteData.quote;
        const author = quoteData.author;

        res.render('index.ejs', {
            quote: quote,
            author: author,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la cita');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
