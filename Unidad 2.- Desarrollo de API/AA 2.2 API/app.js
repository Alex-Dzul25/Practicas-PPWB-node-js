import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/')
.then(respuesta =>{
    console.log('Datos recibidos:', respuesta.data);
})
.catch(error =>{
    console.log('Error a hacer la solicitud:', error);
});