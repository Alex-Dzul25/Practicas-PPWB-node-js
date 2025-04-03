import axios from 'axios';


const API_KEY = 'J03AdbtbOBAmBj3o1Ucglc1qdELd13agMTL46Rqx';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


axios.get(URL)
  .then(response => {
    console.log('Datos obtenidos de la API:', response.data);
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
  });
