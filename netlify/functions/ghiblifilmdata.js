// const fetch = require("node-fetch");

// const ghibliendpoint = 'https://ghibliapi.herokuapp.com/films';

const axios =require('axios')

exports.handler = async (event, context) => {
    console.log(event)
    console.log(context)
    // const ghibliURL = 
  try {
    const response = await axios.get('https://ghibliapi.herokuapp.com/films');
    // const data = await response.json();
    return { statusCode: 200, body: JSON.stringify(response.data) };

  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};