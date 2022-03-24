var axios = require('axios');

module.exports = async function() {
  let url = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  return axios.get(url)
    .then(function(response) {
      console.log(response.data);
      return response.data.results;
    })
    .catch(function(error) {
      console.log(error);
    });
}
