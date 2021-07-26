
const axios = require('axios')


const apiKey = 'ec084c79';

const getMovieByName = async (name) => {


  let options = {
    method: 'GET',
    url: `http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`,
  };


  const responses = axios.request(options).then((response) => {
    console.log(response.data);
    return response.data;
  }).catch((error) => {
    console.error(error);
  });

  return responses
}


module.exports = {
  getMovieByName
}