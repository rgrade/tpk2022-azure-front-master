const axios = require('axios').default;


// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://backexercicio.azurewebsites.net:3000",
});

module.exports = api;
