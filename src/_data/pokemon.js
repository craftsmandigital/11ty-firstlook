var axios = require('axios');

module.exports = async function() {
  let url = 'https://api.github.com/users/craftsmandigital/repos';

  return axios.get(url)
    .then(function(response) {
      console.log(response.data[0]);
      return response.data
    })
    .catch(function(error) {
      console.log(error);
    });
}
