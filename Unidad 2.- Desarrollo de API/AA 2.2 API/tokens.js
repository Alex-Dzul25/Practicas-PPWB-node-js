import axios from 'axios';


const TOKEN = 'github_pat_11BPFMLBQ0pLCRmxEVW8H5_iJcGn5zKIf7TI04qBubCLPuj9iOwNqI80kCRM4QKJJU2cuzbJZ';
const URL = 'https://api.github.com/user';


axios.get(URL, {
    headers: {
        Authorization: `token ${TOKEN}`
    }
})
.then(response => {
    console.log('Datos del usuario:', response.data);
})
.catch(error => {
    console.error('Error en la petición:', error.response.data);
});
