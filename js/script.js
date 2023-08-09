

const axios = require('axios');
axios.post('../js/data.json')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });